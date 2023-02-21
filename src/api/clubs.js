'use strict';

const validator = require('validator');

const privileges = require('../privileges');
const events = require('../events');
const clubs = require('../clubs');
const user = require('../user');
const meta = require('../meta');
const notifications = require('../notifications');
const slugify = require('../slugify');

const clubsAPI = module.exports;

clubsAPI.create = async function (caller, data) {
	if (!caller.uid) {
		throw new Error('[[error:no-privileges]]');
	} else if (!data) {
		throw new Error('[[error:invalid-data]]');
	} else if (typeof data.name !== 'string' || clubs.isPrivilegeClub(data.name)) {
		throw new Error('[[error:invalid-club-name]]');
	}

	const canCreate = await privileges.global.can('group:create', caller.uid);
	if (!canCreate) {
		throw new Error('[[error:no-privileges]]');
	}
	data.ownerUid = caller.uid;
	data.system = false;
	const clubData = await clubs.create(data);
	logClubEvent(caller, 'club-create', {
		clubName: data.name,
	});

	return clubData;
};

clubsAPI.createByApi = async function (caller, data) {
	const clubData = await clubs.create(data);
	logClubEvent(caller, 'club-create', {
		clubName: data.name,
	});
	return clubData;
};

clubsAPI.update = async function (caller, data) {
	if (!data) {
		throw new Error('[[error:invalid-data]]');
	}
	const clubName = await clubs.getClubNameByClubSlug(data.slug);
	await isOwner(caller, clubName);

	delete data.slug;
	await clubs.update(clubName, data);

	return await clubs.getClubData(data.name || clubName);
};

clubsAPI.delete = async function (caller, data) {
	const clubName = await clubs.getClubNameByClubSlug(data.slug);
	await isOwner(caller, clubName);
	if (
		clubs.systemClubs.includes(clubName) ||
		clubs.ephemeralClubs.includes(clubName)
	) {
		throw new Error('[[error:not-allowed]]');
	}

	await clubs.destroy(clubName);
	logClubEvent(caller, 'club-delete', {
		clubName: clubName,
	});
};

clubsAPI.join = async function (caller, data) {
	if (!data) {
		throw new Error('[[error:invalid-data]]');
	}
	if (caller.uid <= 0 || !data.uid) {
		throw new Error('[[error:invalid-uid]]');
	}

	const clubName = await clubs.getClubNameByClubSlug(data.slug);
	if (!clubName) {
		throw new Error('[[error:no-club]]');
	}

	const isCallerAdmin = await user.isAdministrator(caller.uid);
	if (!isCallerAdmin && (
		clubs.systemClubs.includes(clubName) ||
		clubs.isPrivilegeClub(clubName)
	)) {
		throw new Error('[[error:not-allowed]]');
	}

	const [clubData, isCallerOwner, userExists] = await Promise.all([
		clubs.getClubData(clubName),
		clubs.ownership.isOwner(caller.uid, clubName),
		user.exists(data.uid),
	]);

	if (!userExists) {
		throw new Error('[[error:invalid-uid]]');
	}

	const isSelf = parseInt(caller.uid, 10) === parseInt(data.uid, 10);
	if (!meta.config.allowPrivateClubs && isSelf) {
		// all clubs are public!
		await clubs.join(clubName, data.uid);
		logClubEvent(caller, 'club-join', {
			clubName: clubName,
			targetUid: data.uid,
		});
		return;
	}

	if (!isCallerAdmin && isSelf && clubData.private && clubData.disableJoinRequests) {
		throw new Error('[[error:club-join-disabled]]');
	}

	if ((!clubData.private && isSelf) || isCallerAdmin || isCallerOwner) {
		await clubs.join(clubName, data.uid);
		logClubEvent(caller, 'club-join', {
			clubName: clubName,
			targetUid: data.uid,
		});
	} else if (isSelf) {
		await clubs.requestMembership(clubName, caller.uid);
		logClubEvent(caller, 'club-request-membership', {
			clubName: clubName,
			targetUid: data.uid,
		});
	}
};

clubsAPI.leave = async function (caller, data) {
	if (!data) {
		throw new Error('[[error:invalid-data]]');
	}
	if (caller.uid <= 0) {
		throw new Error('[[error:invalid-uid]]');
	}
	const isSelf = parseInt(caller.uid, 10) === parseInt(data.uid, 10);
	const clubName = await clubs.getClubNameByClubSlug(data.slug);
	if (!clubName) {
		throw new Error('[[error:no-club]]');
	}

	if (typeof clubName !== 'string') {
		throw new Error('[[error:invalid-club-name]]');
	}

	if (clubName === 'administrators' && isSelf) {
		throw new Error('[[error:cant-remove-self-as-admin]]');
	}

	const [clubData, isCallerAdmin, isCallerOwner, userExists, isMember] = await Promise.all([
		clubs.getClubData(clubName),
		user.isAdministrator(caller.uid),
		clubs.ownership.isOwner(caller.uid, clubName),
		user.exists(data.uid),
		clubs.isMember(data.uid, clubName),
	]);

	if (!userExists) {
		throw new Error('[[error:invalid-uid]]');
	}
	if (!isMember) {
		return;
	}

	if (clubData.disableLeave && isSelf) {
		throw new Error('[[error:club-leave-disabled]]');
	}

	if (isSelf || isCallerAdmin || isCallerOwner) {
		await clubs.leave(clubName, data.uid);
	} else {
		throw new Error('[[error:no-privileges]]');
	}

	const { displayname } = await user.getUserFields(data.uid, ['username']);

	const notification = await notifications.create({
		type: 'club-leave',
		bodyShort: `[[clubs:membership.leave.notification_title, ${displayname}, ${clubName}]]`,
		nid: `club:${validator.escape(clubName)}:uid:${data.uid}:club-leave`,
		path: `/clubs/${slugify(clubName)}`,
		from: data.uid,
	});
	const uids = await clubs.getOwners(clubName);
	await notifications.push(notification, uids);

	logClubEvent(caller, 'club-leave', {
		clubName: clubName,
		targetUid: data.uid,
	});
};

clubsAPI.grant = async (caller, data) => {
	const clubName = await clubs.getClubNameByClubSlug(data.slug);
	await isOwner(caller, clubName);

	await clubs.ownership.grant(data.uid, clubName);
	logClubEvent(caller, 'club-owner-grant', {
		clubName: clubName,
		targetUid: data.uid,
	});
};

clubsAPI.rescind = async (caller, data) => {
	const clubName = await clubs.getClubNameByClubSlug(data.slug);
	await isOwner(caller, clubName);

	await clubs.ownership.rescind(data.uid, clubName);
	logClubEvent(caller, 'club-owner-rescind', {
		clubName: clubName,
		targetUid: data.uid,
	});
};

async function isOwner(caller, clubName) {
	if (typeof clubName !== 'string') {
		throw new Error('[[error:invalid-club-name]]');
	}
	const [hasAdminPrivilege, isGlobalModerator, isOwner, club] = await Promise.all([
		privileges.admin.can('admin:clubs', caller.uid),
		user.isGlobalModerator(caller.uid),
		clubs.ownership.isOwner(caller.uid, clubName),
		clubs.getClubData(clubName),
	]);

	const check = isOwner || hasAdminPrivilege || (isGlobalModerator && !club.system);
	if (!check) {
		throw new Error('[[error:no-privileges]]');
	}
}

function logClubEvent(caller, event, additional) {
	events.log({
		type: event,
		uid: caller.uid,
		ip: caller.ip,
		...additional,
	});
}
