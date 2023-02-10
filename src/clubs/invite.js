'use strict';

const _ = require('lodash');

const db = require('../database');
const user = require('../user');
const slugify = require('../slugify');
const plugins = require('../plugins');
const notifications = require('../notifications');

module.exports = function (Club) {
	Club.requestMembership = async function (clubName, uid) {
		await inviteOrRequestMembership(clubName, uid, 'request');
		const { displayname } = await user.getUserFields(uid, ['username']);

		const [notification, owners] = await Promise.all([
			notifications.create({
				type: 'club-request-membership',
				bodyShort: `[[clubs:request.notification_title, ${displayname}]]`,
				bodyLong: `[[clubs:request.notification_text, ${displayname}, ${clubName}]]`,
				nid: `club:${clubName}:uid:${uid}:request`,
				path: `/clubs/${slugify(clubName)}`,
				from: uid,
			}),
			Club.getOwners(clubName),
		]);

		await notifications.push(notification, owners);
	};

	Club.acceptMembership = async function (clubName, uid) {
		await db.setsRemove([`club:${clubName}:pending`, `club:${clubName}:invited`], uid);
		await Club.join(clubName, uid);

		const notification = await notifications.create({
			type: 'club-invite',
			bodyShort: `[[clubs:membership.accept.notification_title, ${clubName}]]`,
			nid: `club:${clubName}:uid:${uid}:invite-accepted`,
			path: `/clubs/${slugify(clubName)}`,
		});
		await notifications.push(notification, [uid]);
	};

	Club.rejectMembership = async function (clubNames, uid) {
		if (!Array.isArray(clubNames)) {
			clubNames = [clubNames];
		}
		const sets = [];
		clubNames.forEach(clubName => sets.push(`club:${clubName}:pending`, `club:${clubName}:invited`));
		await db.setsRemove(sets, uid);
	};

	Club.invite = async function (clubName, uids) {
		uids = Array.isArray(uids) ? uids : [uids];
		uids = await inviteOrRequestMembership(clubName, uids, 'invite');

		const notificationData = await Promise.all(uids.map(uid => notifications.create({
			type: 'club-invite',
			bodyShort: `[[clubs:invited.notification_title, ${clubName}]]`,
			bodyLong: '',
			nid: `club:${clubName}:uid:${uid}:invite`,
			path: `/clubs/${slugify(clubName)}`,
		})));

		await Promise.all(uids.map((uid, index) => notifications.push(notificationData[index], uid)));
	};

	async function inviteOrRequestMembership(clubName, uids, type) {
		uids = Array.isArray(uids) ? uids : [uids];
		uids = uids.filter(uid => parseInt(uid, 10) > 0);
		const [exists, isMember, isPending, isInvited] = await Promise.all([
			Club.exists(clubName),
			Club.isMembers(uids, clubName),
			Club.isPending(uids, clubName),
			Club.isInvited(uids, clubName),
		]);

		if (!exists) {
			throw new Error('[[error:no-club]]');
		}

		uids = uids.filter((uid, i) => !isMember[i] && ((type === 'invite' && !isInvited[i]) || (type === 'request' && !isPending[i])));

		const set = type === 'invite' ? `club:${clubName}:invited` : `club:${clubName}:pending`;
		await db.setAdd(set, uids);
		const hookName = type === 'invite' ? 'inviteMember' : 'requestMembership';
		plugins.hooks.fire(`action:club.${hookName}`, {
			clubName: clubName,
			uids: uids,
		});
		return uids;
	}

	Club.isInvited = async function (uids, clubName) {
		return await checkInvitePending(uids, `club:${clubName}:invited`);
	};

	Club.isPending = async function (uids, clubName) {
		return await checkInvitePending(uids, `club:${clubName}:pending`);
	};

	async function checkInvitePending(uids, set) {
		const isArray = Array.isArray(uids);
		uids = isArray ? uids : [uids];
		const checkUids = uids.filter(uid => parseInt(uid, 10) > 0);
		const isMembers = await db.isSetMembers(set, checkUids);
		const map = _.zipObject(checkUids, isMembers);
		return isArray ? uids.map(uid => !!map[uid]) : !!map[uids[0]];
	}

	Club.getPending = async function (clubName) {
		if (!clubName) {
			return [];
		}
		return await db.getSetMembers(`club:${clubName}:pending`);
	};
};
