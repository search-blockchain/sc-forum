'use strict';

const db = require('../database');
const user = require('../user');
const plugins = require('../plugins');
const cache = require('../cache');

module.exports = function (clubs) {
	clubs.leave = async function (clubNames, uid) {
		if (Array.isArray(clubNames) && !clubNames.length) {
			return;
		}
		if (!Array.isArray(clubNames)) {
			clubNames = [clubNames];
		}

		const isMembers = await clubs.isMemberOfclubs(uid, clubNames);

		const clubsToLeave = clubNames.filter((clubName, index) => isMembers[index]);
		if (!clubsToLeave.length) {
			return;
		}

		await Promise.all([
			db.sortedSetRemove(clubsToLeave.map(clubName => `club:${clubName}:members`), uid),
			db.setRemove(clubsToLeave.map(clubName => `club:${clubName}:owners`), uid),
			db.decrObjectField(clubsToLeave.map(clubName => `club:${clubName}`), 'memberCount'),
		]);

		clubs.clearCache(uid, clubsToLeave);
		cache.del(clubsToLeave.map(name => `club:${name}:members`));

		const clubData = await clubs.getclubsFields(clubsToLeave, ['name', 'hidden', 'memberCount']);
		if (!clubData) {
			return;
		}

		const emptyPrivilegeclubs = clubData.filter(g => g && clubs.isPrivilegeclub(g.name) && g.memberCount === 0);
		const visibleclubs = clubData.filter(g => g && !g.hidden);

		const promises = [];
		if (emptyPrivilegeclubs.length) {
			promises.push(clubs.destroy, emptyPrivilegeclubs);
		}
		if (visibleclubs.length) {
			promises.push(
				db.sortedSetAdd,
				'clubs:visible:memberCount',
				visibleclubs.map(clubData => clubData.memberCount),
				visibleclubs.map(clubData => clubData.name)
			);
		}

		await Promise.all(promises);

		await clearclubTitleIfSet(clubsToLeave, uid);

		plugins.hooks.fire('action:club.leave', {
			clubNames: clubsToLeave,
			uid: uid,
		});
	};

	async function clearclubTitleIfSet(clubNames, uid) {
		clubNames = clubNames.filter(clubName => clubName !== 'registered-users' && !clubs.isPrivilegeclub(clubName));
		if (!clubNames.length) {
			return;
		}
		const userData = await user.getUserData(uid);
		if (!userData) {
			return;
		}

		const newTitleArray = userData.clubTitleArray.filter(clubTitle => !clubNames.includes(clubTitle));
		if (newTitleArray.length) {
			await db.setObjectField(`user:${uid}`, 'clubTitle', JSON.stringify(newTitleArray));
		} else {
			await db.deleteObjectField(`user:${uid}`, 'clubTitle');
		}
	}

	clubs.leaveAllclubs = async function (uid) {
		const clubs = await db.getSortedSetRange('clubs:createtime', 0, -1);
		await Promise.all([
			clubs.leave(clubs, uid),
			clubs.rejectMembership(clubs, uid),
		]);
	};

	clubs.kick = async function (uid, clubName, isOwner) {
		if (isOwner) {
			// If the owners set only contains one member, error out!
			const numOwners = await db.setCount(`club:${clubName}:owners`);
			if (numOwners <= 1) {
				throw new Error('[[error:club-needs-owner]]');
			}
		}
		await clubs.leave(clubName, uid);
	};
};
