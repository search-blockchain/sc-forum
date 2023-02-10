'use strict';

const validator = require('validator');
const nconf = require('nconf');

const meta = require('../meta');
const clubs = require('../clubs');
const user = require('../user');
const helpers = require('./helpers');
const pagination = require('../pagination');
const privileges = require('../privileges');

const clubsController = module.exports;

clubsController.list = async function (req, res) {
	const sort = req.query.sort || 'alpha';

	const [clubData, allowClubCreation] = await Promise.all([
		clubs.getClubsBySort(sort, 0, 14),
		privileges.global.can('club:create', req.uid),
	]);

	res.render('clubs/list', {
		clubs: clubData,
		allowClubCreation: allowClubCreation,
		nextStart: 15,
		title: '[[pages:clubs]]',
		breadcrumbs: helpers.buildBreadcrumbs([{ text: '[[pages:clubs]]' }]),
	});
};

clubsController.details = async function (req, res, next) {
	const lowercaseSlug = req.params.slug.toLowerCase();
	if (req.params.slug !== lowercaseSlug) {
		if (res.locals.isAPI) {
			req.params.slug = lowercaseSlug;
		} else {
			return res.redirect(`${nconf.get('relative_path')}/clubs/${lowercaseSlug}`);
		}
	}
	const clubName = await clubs.getClubNameByClubSlug(req.params.slug);
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
	const [clubData, posts] = await Promise.all([
		clubs.get(clubName, {
			uid: req.uid,
			truncateUserList: true,
			userListCount: 20,
		}),
		clubs.getLatestMemberPosts(clubName, 10, req.uid),
	]);
	if (!clubData) {
		return next();
	}
	clubData.isOwner = clubData.isOwner || isAdmin || (isGlobalMod && !clubData.system);

	res.render('clubs/details', {
		title: `[[pages:club, ${clubData.displayName}]]`,
		club: clubData,
		posts: posts,
		isAdmin: isAdmin,
		isGlobalMod: isGlobalMod,
		allowPrivateClubs: meta.config.allowPrivateClubs,
		breadcrumbs: helpers.buildBreadcrumbs([{ text: '[[pages:clubs]]', url: '/clubs' }, { text: clubData.displayName }]),
	});
};

clubsController.members = async function (req, res, next) {
	const page = parseInt(req.query.page, 10) || 1;
	const usersPerPage = 50;
	const start = Math.max(0, (page - 1) * usersPerPage);
	const stop = start + usersPerPage - 1;
	const clubName = await clubs.getClubNameByClubSlug(req.params.slug);
	if (!clubName) {
		return next();
	}
	const [clubData, isAdminOrGlobalMod, isMember, isHidden] = await Promise.all([
		clubs.getClubData(clubName),
		user.isAdminOrGlobalMod(req.uid),
		clubs.isMember(req.uid, clubName),
		clubs.isHidden(clubName),
	]);

	if (isHidden && !isMember && !isAdminOrGlobalMod) {
		return next();
	}
	const users = await user.getUsersFromSet(`club:${clubName}:members`, req.uid, start, stop);

	const breadcrumbs = helpers.buildBreadcrumbs([
		{ text: '[[pages:clubs]]', url: '/clubs' },
		{ text: validator.escape(String(clubName)), url: `/clubs/${req.params.slug}` },
		{ text: '[[clubs:details.members]]' },
	]);

	const pageCount = Math.max(1, Math.ceil(clubData.memberCount / usersPerPage));
	res.render('clubs/members', {
		users: users,
		pagination: pagination.create(page, pageCount, req.query),
		breadcrumbs: breadcrumbs,
	});
};
