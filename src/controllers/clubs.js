'use strict';

const validator = require('validator');
const nconf = require('nconf');

const meta = require('../meta');
const clubs = require('../clubs');
const groups = require('../groups');
const categories = require('../categories');
const topics = require('../topics');
const user = require('../user');
const helpers = require('./helpers');
const pagination = require('../pagination');
const privileges = require('../privileges');
const utils = require('../utils');
const slugify = require('../slugify');

const clubsController = module.exports;

clubsController.list = async function (req, res) {
	const sort = req.query.sort || 'alpha';

	const [groupData, allowGroupCreation] = await Promise.all([
		groups.getGroupsBySort(sort, 0, 50),
		privileges.global.can('group:create', req.uid)
	]);
	
	let newGroupData = await Promise.all(groupData.map(async (item, index) => {
		const [isMember, isOwner] = await Promise.all([
			groups.isMember(req.uid, item.name),
			// groups.isPending(req.uid, item.slug),
			// Club.isInvited(req.uid, item.slug),
			groups.ownership.isOwner(req.uid, item.name),
		])
		const tagContent = isOwner ? 'Owner' : (isMember ? 'Join' : '')
		const cid = groupData[index].memberPostCidsArray?.[0] || ''
		const obj = Object.assign({isMember, isOwner, tagContent, cid}, groupData[index])
		console.log('push明细', obj)
		return obj
	}))
	
	res.render('clubs/list', {
		groups: newGroupData,
		allowGroupCreation: allowGroupCreation,
		nextStart: 51,
		title: '[[pages:clubs]]',
		breadcrumbs: helpers.buildBreadcrumbs([{ text: '[[pages:clubs]]' }]),
	});
};

const getTempQuery = function({ cid, uid }) {
	return {
		uid,
		cid,
		start: 0,
		stop: 19,
		sort: 'most_posts',
		settings: {
			acpLang: 'zh-CN',
			bootswatchSkin: '',
			categoryTopicSort: 'most_posts',
			categoryWatchState: 'watching',
			dailyDigestFreq: 'off',
			followTopicsOnCreate: true,
			followTopicsOnReply: true,
			homePageRoute: '',
			openOutgoingLinksInNewTab: false,
			postsPerPage: 20,
			restrictChat: true,
			scrollToMyPost: true,
			showemail: false,
			showfullname: false,
			topicPostSort: 'newest_to_oldest',
			topicSearchEnabled: true,
			topicsPerPage: 20,
			updateUrlWithPostIndex: true,
			upvoteNotifFreq: 'all',
			usePagination: false,
			userLang: 'zh-CN',
			themeMaterialSkin: null,
			uid: 1,
			notificationType_upvote: 'notification',
			'notificationType_new-topic': 'notification',
			'notificationType_new-reply': 'notification',
			'notificationType_post-edit': 'notification',
			notificationType_follow: 'notification',
			'notificationType_new-chat': 'notification',
			'notificationType_new-group-chat': 'notification',
			'notificationType_group-invite': 'notification',
			'notificationType_group-leave': 'notification',
			'notificationType_group-request-membership': 'notification',
			notificationType_mention: 'notification',
			'notificationType_new-register': 'notification',
			'notificationType_post-queue': 'notification',
			'notificationType_new-post-flag': 'notification',
			'notificationType_new-user-flag': 'notification'
		},
		query: {},
		tag: undefined,
		// targetUid: 0,
		category: {
			bgColor: '#fda34b',
			cid: 1,
			class: 'col-md-3 col-xs-6',
			color: '#ffffff',
			description: 'Announcements regarding our community',
			descriptionParsed: '<p>Announcements regarding our community</p>\n',
			disabled: 0,
			icon: 'fa-bullhorn',
			imageClass: 'cover',
			isSection: 0,
			link: '',
			name: 'Announcements',
			numRecentReplies: 1,
			order: 1,
			parentCid: 0,
			post_count: 13,
			slug: '1/announcements',
			subCategoriesPerPage: 10,
			topic_count: 8,
			minTags: 0,
			maxTags: 5,
			postQueue: 0,
			totalPostCount: 13,
			totalTopicCount: 8,
			tagWhitelist: [],
			'unread-class': ''
		}
	}
}

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
	// const [groupData, posts] = await Promise.all([
	// 	clubs.get(clubName, {
	// 		uid: req.uid,
	// 		truncateUserList: true,
	// 		userListCount: 20,
	// 	}),
	// 	clubs.getLatestMemberPosts(clubName, 10, req.uid),
	// ]);

	const groupData = await clubs.get(clubName, {
		uid: req.uid,
		truncateUserList: true,
		userListCount: 20,
	})
	
	if (!groupData) {
		return next();
	}
	groupData.isOwner = groupData.isOwner || isAdmin || (isGlobalMod && !groupData.system);
	
	if(!groupData.memberPostCidsArray || !groupData.memberPostCidsArray.length) {
		console.warn('未关联Cid', req.uid)
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
		return
	}

	// console.log('列表，群组数据！！', groupData)
	// const [categoryList, categoriesTids, posts] = await Promise.all([
	// 	categories.getCategories(groupData.memberPostCidsArray),
	// 	// groupData.memberPostCidsArray
	// 	// categories.getTopicIds({cid: 4}),
	// 	// groups.getLatestMemberPosts(groupName, 10, req.uid),
	// ]);
	// console.log('asdfasdfasdf??????????!!!!!!')
	// console.log('分类跌表数据', categoryList)
	// console.log('帖子id', categoriesTids)

	// const cid = req.params.category_id;

	// let currentPage = parseInt(req.query.page, 10) || 1;
	// let topicIndex = utils.isNumber(req.params.topic_index) ? parseInt(req.params.topic_index, 10) - 1 : 0;
	// if ((req.params.topic_index && !utils.isNumber(req.params.topic_index)) || !utils.isNumber(cid)) {
	// 	return next();
	// }
	// if (topicIndex < 0) {
	// 	return helpers.redirect(res, `/clubs/${categoryFields.slug}?${qs.stringify(req.query)}`);
	// }

	// const userSettings = await user.getSettings(req.uid);
	// if(userSettings.usePagination && currentPage < 1) {
	// 	return next();
	// }
	
	// if (!userSettings.usePagination) {
	// 	topicIndex = Math.max(0, topicIndex - (Math.ceil(userSettings.topicsPerPage / 2) - 1));
	// } else if (!req.query.page) {
	// 	const index = Math.max(parseInt((topicIndex || 0), 10), 0);
	// 	currentPage = Math.ceil((index + 1) / userSettings.topicsPerPage);
	// 	topicIndex = 0;
	// }

	// const targetUid = await user.getUidByUserslug(req.query.author);
	// const start = ((currentPage - 1) * userSettings.topicsPerPage) + topicIndex;
	// const stop = start + userSettings.topicsPerPage - 1;


	
	let query = getTempQuery({ cid: groupData.memberPostCidsArray[0], uid: req.uid})
	const topicList = await categories.getCategoryById(query)
	// console.log('按CID查询topic', topicList)
	// console.log('查看回复？', topicList.length, topicList.topics[2])
	// const ttid = 7
	// const topicData = await topics.getTopicData(ttid)
	// console.log('数据比对——完整帖子', topicData)

	const fullTopics = await Promise.all(topicList.topics.map(async (topicData) => {
		// 参考controller/topic
		const set = `tid:${topicData.tid}:posts:votes` // sort === 'most_votes' ? `tid:${tid}:posts:votes` : `tid:${tid}:posts`;
		const reverse = true; // sort === 'newest_to_oldest' || sort === 'most_votes';
		const start = 1
		const stop = 50
		await topics.getTopicWithPosts(topicData, set, req.uid, start, stop, reverse);
		console.log('追加psot数据？', topicData.tid, topicData.posts.length)
		return topicData
	}))
	// topicList.topics = fullTopics

	// console.log('完整的主题数据', fullTopics)
	
	// 参考controller/topic
	// const topicData = topicList.topics[0]
	// const set = `tid:${ttid}:posts:votes` // sort === 'most_votes' ? `tid:${tid}:posts:votes` : `tid:${tid}:posts`;
	// const reverse = true; // sort === 'newest_to_oldest' || sort === 'most_votes';
	// const start = 1
	// const stop = 50
	// await topics.getTopicWithPosts(topicData, set, req.uid, start, stop, reverse);

	// console.log('追加psot数据？', topicData)

	

	// const [details] = await Promise.all(categoryList.map(async (item) => {
	// 	let topicss = await categories.getCategoryTopics(item)
	// 	// {
	// 	// 	uid: socket.uid,
	// 	// 	cid: data.cid,
	// 	// 	start: start,
	// 	// 	stop: stop,
	// 	// 	sort: sort,
	// 	// 	settings: settings,
	// 	// 	query: data.query,
	// 	// 	tag: data.query.tag,
	// 	// 	targetUid: targetUid,
	// 	// }
	// 	console.log('查询topic详情？？', topicss)
	// 	return topicss
	// 	// topics.getTopicsData(tids)
	// 	// await topics.getTopicsByTids()
	// }))

	// console.log('群组主题内容', categoryList)
	// console.log('分类的topic内容！', details)

	
	// if(!req.cid) {
	// 	const [groupData, allowGroupCreation] = await Promise.all([
	// 		groups.getGroupsBySort(sort, 0, 50),
	// 	}

	// }
	
	// console.log('完整topic数据', fullTopics)
	
	// console.log('group数据', groupData)
	res.render('clubs/topics', {
		currentUID: req.uid,
		title: `[[pages:clubs, ${groupData.displayName}]]`,
		group: groupData,
		category: topicList,
		topics: fullTopics,
		// categories: categoryList,
		// posts: posts,
		isAdmin: isAdmin,
		isGlobalMod: isGlobalMod,
		allowPrivateGroups: meta.config.allowPrivateGroups,
		breadcrumbs: helpers.buildBreadcrumbs([{ text: '[[pages:clubs]]', url: '/clubs' }, { text: groupData.displayName }]),
		...fullTopics[0]
	});
};

clubsController.groupDetails = async function (req, res, next) {
	let slug = req.params.slug
	const lowercaseSlug = slugify(slug).toLowerCase();
	if (slug !== lowercaseSlug) {
		if (res.locals.isAPI) {
			slug = lowercaseSlug;
		} else {
			return res.redirect(`${nconf.get('relative_path')}/clubs/${lowercaseSlug}`);
		}
	}
	const groupName = await groups.getGroupNameByGroupSlug(slug);
	if (!groupName) {
		return next();
	}
	const [exists, isHidden, isAdmin, isGlobalMod] = await Promise.all([
		groups.exists(groupName),
		groups.isHidden(groupName),
		user.isAdministrator(req.uid),
		user.isGlobalModerator(req.uid),
	]);
	if (!exists) {
		return next();
	}
	if (isHidden && !isAdmin && !isGlobalMod) {
		const [isMember, isInvited] = await Promise.all([
			groups.isMember(req.uid, groupName),
			groups.isInvited(req.uid, groupName),
		]);
		if (!isMember && !isInvited) {
			return next();
		}
	}
	const [groupData, posts] = await Promise.all([
		groups.get(groupName, {
			uid: req.uid,
			truncateUserList: true,
			userListCount: 20,
		}),
		groups.getLatestMemberPosts(groupName, 10, req.uid),
	]);
	if (!groupData) {
		return next();
	}
	groupData.isOwner = groupData.isOwner || isAdmin || (isGlobalMod && !groupData.system);

	res.render('clubs/details', {
		title: `[[pages:clubs, ${groupData.displayName}]]`,
		group: groupData,
		posts: posts,
		isAdmin: isAdmin,
		isGlobalMod: isGlobalMod,
		allowPrivateGroups: meta.config.allowPrivateGroups,
		breadcrumbs: helpers.buildBreadcrumbs([{ text: '[[pages:clubs]]', url: '/clubs' }, { text: groupData.displayName }]),
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
