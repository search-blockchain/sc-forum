'use strict';

const validator = require('validator');
const nconf = require('nconf');

const meta = require('../meta');
const clubs = require('../clubs');
const groups = require('../groups');
const categories = require('../categories');
const topics = require('../topics');
const posts = require('../posts');
const user = require('../user');
const helpers = require('./helpers');
const pagination = require('../pagination');
const privileges = require('../privileges');
const utils = require('../utils');
const slugify = require('../slugify');
const defaultClubsSort = 'count';
const defaultCategoriesSort = 'newest_to_oldest';

const clubsController = module.exports;

clubsController.list = async function (req, res) {
	const sort = req.query.sort || defaultClubsSort;
	let totalClub = []
	let allowClubCreation = await privileges.global.can('group:create', req.uid)
	let nextStart = 0

    totalClub = await clubs.hasUidGetClubsList(req)
    if(totalClub.length == 0){
		totalClub = await clubs.getGroupsBySortDeleteOwnerAndMember(sort, 0, 14,req.uid)
		nextStart = totalClub.length
	}

	res.render('clubs/list', {
		groups: totalClub,
		allowGroupCreation: allowClubCreation,
		nextStart: nextStart,
		title: '[[pages:clubs]]',
		breadcrumbs: helpers.buildBreadcrumbs([{ text: '[[pages:clubs]]' }]),
	});
};

clubsController.details = async function (req, res, next) {
	let slug = req.params.slug
	const lowercaseSlug = slugify(slug).toLowerCase();
	if (slug !== lowercaseSlug) {
		if (res.locals.isAPI) {
			slug = lowercaseSlug;
		} else {
			return res.redirect(`${nconf.get('relative_path')}/clubs/${lowercaseSlug}`);
		}
	}
	
	const clubName = await clubs.getClubNameByClubSlug(lowercaseSlug);
	if (!clubName) {
		return next();
	}
	const [exists, isHidden, isAdmin, isGlobalMod] = await Promise.all([
		clubs.exists(clubName),
		clubs.isHidden(clubName),
		user.isAdministrator(req.uid),
		user.isGlobalModerator(req.uid),
	]);
	if (!exists) {
		return next();
	}

	if (isHidden && !isAdmin && !isGlobalMod) {
		const [isMember, isInvited] = await Promise.all([
			clubs.isMember(req.uid, clubName),
			clubs.isInvited(req.uid, clubName),
		]);
		if (!isMember && !isInvited) {
			return next();
		}
	}

	const groupData = await clubs.get(clubName, {
		uid: req.uid,
		truncateUserList: true,
		userListCount: 20,
	})
	
	if (!groupData) {
		return next();
	}

	groupData.isOwner = groupData.isOwner || isAdmin || (isGlobalMod && !groupData.system);
	const ownerUids = await clubs.getOwners(clubName);
	groupData.hasOwner = ownerUids && ownerUids.length > 0;
	// const ownerUids = await clubs.getOwners(clubName);
	// groupData.ownerUids = ownerUids;
	groupData.showTopicTools = groupData.isOwner;
	groupData.view_thread_tools = groupData.isOwner;

	const renderEmpty = () => {
		console.warn('?????????Cid???Cid?????????', req.uid)
		res.render('clubs/topics', {
			currentUID: req.uid,
			title: `[[pages:clubs, ${groupData.displayName}]]`,
			group: groupData,
			category: [],
			topics: [],
			isAdmin: isAdmin,
			isGlobalMod: isGlobalMod,
			allowPrivateGroups: meta.config.allowPrivateGroups,
			breadcrumbs: helpers.buildBreadcrumbs([{ text: '[[pages:clubs]]', url: '/clubs' }, { text: groupData.displayName }]),
			// ...fullTopics[0]
		});
	}
	
	if(!groupData.memberPostCidsArray || !groupData.memberPostCidsArray.length) {
		return renderEmpty();
	}

	//let query = await getTempQuery({ cid: groupData.memberPostCidsArray[0], uid: req.uid, req})
	const cid = groupData.memberPostCidsArray[0]; // req.params.category_id;

	const [userSettings, userPrivileges] = await Promise.all([
		user.getSettings(req.uid),
		privileges.categories.get(cid, req.uid),
	]);

	if (!userPrivileges.read) {
		return helpers.notAllowed(req, res);
	}

	let query = {
		uid: req.uid,
		cid,
		start: req.start || 0,
		stop: req.stop || 10,
		sort: req.query.sort || req.body.sort || userSettings.clubTopicSort,
		settings: userSettings
	}

	const topicList = await categories.getCategoryById(query)
	if(!topicList) {
		return renderEmpty();
	}
	
	const fullTopics = await Promise.all(topicList.topics.map(async (topicData) => {
		// ??????controller/topic
		const set = `tid:${topicData.tid}:posts:votes` // sort === 'most_votes' ? `tid:${tid}:posts:votes` : `tid:${tid}:posts`;
		const reverse = true; // sort === 'newest_to_oldest' || sort === 'most_votes';
		const start = 1
		const stop = 50
		await topics.getTopicWithPosts(topicData, set, req.uid, start, stop, reverse);
		let response = await posts.getPostData(topicData.mainPid)
		topicData.content = response.content;
		return topicData
	}))

	res.render('clubs/topics', {
		currentUID: req.uid,
		title: `[[pages:clubs, ${groupData.displayName}]]`,
		group: groupData,
		category: topicList,
		topics: fullTopics,
		isAdmin: isAdmin,
		isGlobalMod: isGlobalMod,
		privileges: userPrivileges,
		showTopicTools: userPrivileges.editable,
		allowPrivateGroups: meta.config.allowPrivateGroups,
		breadcrumbs: helpers.buildBreadcrumbs([{ text: '[[pages:clubs]]', url: '/clubs' }, { text: groupData.displayName }]),
		...fullTopics[0]
	});
};

clubsController.members = async function (req, res, next) {
	const page = parseInt(req.query.page, 10) || 1;
	const usersPerPage = 50;
	const start = Math.max(0, (page - 1) * usersPerPage);
	const stop = start + usersPerPage - 1;
	const groupName = await groups.getGroupNameByGroupSlug(req.params.slug);
	if (!groupName) {
		return next();
	}
	const [groupData, isAdminOrGlobalMod, isMember, isHidden] = await Promise.all([
		groups.getGroupData(groupName),
		user.isAdminOrGlobalMod(req.uid),
		groups.isMember(req.uid, groupName),
		groups.isHidden(groupName),
	]);

	if (isHidden && !isMember && !isAdminOrGlobalMod) {
		return next();
	}
	const users = await user.getUsersFromSet(`group:${groupName}:members`, req.uid, start, stop);

	const breadcrumbs = helpers.buildBreadcrumbs([
		{ text: '[[pages:clubs]]', url: '/clubs' },
		{ text: validator.escape(String(groupName)), url: `/clubs/${req.params.slug}` },
		{ text: '[[groups:details.members]]' },
	]);

	const pageCount = Math.max(1, Math.ceil(groupData.memberCount / usersPerPage));
	res.render('clubs/members', {
		users: users,
		pagination: pagination.create(page, pageCount, req.query),
		breadcrumbs: breadcrumbs,
	});
};
