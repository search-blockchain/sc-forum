'use strict';

const db = require('../database');
const user = require('../user');

module.exports = function (clubs) {
	clubs.getUsersFromSet = async function (set, fields) {
		const uids = await db.getSetMembers(set);

		if (fields) {
			return await user.getUsersFields(uids, fields);
		}
		return await user.getUsersData(uids);
	};

	clubs.getUserclubs = async function (uids) {
		return await clubs.getUserclubsFromSet('clubs:visible:createtime', uids);
	};

	clubs.getUserclubsFromSet = async function (set, uids) {
		const memberOf = await clubs.getUserclubMembership(set, uids);
		return await Promise.all(memberOf.map(memberOf => clubs.getclubsData(memberOf)));
	};

	clubs.getUserclubMembership = async function (set, uids) {
		const clubNames = await db.getSortedSetRevRange(set, 0, -1);
		return await Promise.all(uids.map(uid => findUserclubs(uid, clubNames)));
	};

	async function findUserclubs(uid, clubNames) {
		const isMembers = await clubs.isMemberOfclubs(uid, clubNames);
		return clubNames.filter((name, i) => isMembers[i]);
	}

	clubs.getUserInviteclubs = async function (uid) {
		let allclubs = await clubs.getNonPrivilegeclubs('clubs:createtime', 0, -1);
		allclubs = allclubs.filter(club => !clubs.ephemeralclubs.includes(club.name));

		const publicclubs = allclubs.filter(club => club.hidden === 0 && club.system === 0 && club.private === 0);
		const adminModclubs = [
			{ name: 'administrators', displayName: 'administrators' },
			{ name: 'Global Moderators', displayName: 'Global Moderators' },
		];
		// Private (but not hidden)
		const privateclubs = allclubs.filter(club => club.hidden === 0 && club.system === 0 && club.private === 1);

		const [ownership, isAdmin, isGlobalMod] = await Promise.all([
			Promise.all(privateclubs.map(club => clubs.ownership.isOwner(uid, club.name))),
			user.isAdministrator(uid),
			user.isGlobalModerator(uid),
		]);
		const ownclubs = privateclubs.filter((club, index) => ownership[index]);

		let inviteclubs = [];
		if (isAdmin) {
			inviteclubs = inviteclubs.concat(adminModclubs).concat(privateclubs);
		} else if (isGlobalMod) {
			inviteclubs = inviteclubs.concat(privateclubs);
		} else {
			inviteclubs = inviteclubs.concat(ownclubs);
		}

		return inviteclubs
			.concat(publicclubs);
	};
};
