'use strict';

const winston = require('winston');

const db = require('../database');
const user = require('../user');
const plugins = require('../plugins');
const cache = require('../cache');

module.exports = function (clubs) {
	clubs.join = async function (clubNames, uid) {
		if (!clubNames) {
			throw new Error('[[error:invalid-data]]');
		}
		if (Array.isArray(clubNames) && !clubNames.length) {
			return;
		}
		if (!Array.isArray(clubNames)) {
			clubNames = [clubNames];
		}

		if (!uid) {
			throw new Error('[[error:invalid-uid]]');
		}

		const [isMembers, exists, isAdmin] = await Promise.all([
			clubs.isMemberOfclubs(uid, clubNames),
			clubs.exists(clubNames),
			user.isAdministrator(uid),
		]);

		const clubsToCreate = clubNames.filter((clubName, index) => clubName && !exists[index]);
		const clubsToJoin = clubNames.filter((clubName, index) => !isMembers[index]);

		if (!clubsToJoin.length) {
			return;
		}
		await createNonExistingclubs(clubsToCreate);

		const promises = [
			db.sortedSetsAdd(clubsToJoin.map(clubName => `club:${clubName}:members`), Date.now(), uid),
			db.incrObjectField(clubsToJoin.map(clubName => `club:${clubName}`), 'memberCount'),
		];
		if (isAdmin) {
			promises.push(db.setsAdd(clubsToJoin.map(clubName => `club:${clubName}:owners`), uid));
		}

		await Promise.all(promises);

		clubs.clearCache(uid, clubsToJoin);
		cache.del(clubsToJoin.map(name => `club:${name}:members`));

		const clubData = await clubs.getclubsFields(clubsToJoin, ['name', 'hidden', 'memberCount']);
		const visibleclubs = clubData.filter(clubData => clubData && !clubData.hidden);

		if (visibleclubs.length) {
			await db.sortedSetAdd(
				'clubs:visible:memberCount',
				visibleclubs.map(clubData => clubData.memberCount),
				visibleclubs.map(clubData => clubData.name)
			);
		}

		await setclubTitleIfNotSet(clubsToJoin, uid);

		plugins.hooks.fire('action:club.join', {
			clubNames: clubsToJoin,
			uid: uid,
		});
	};

	async function createNonExistingclubs(clubsToCreate) {
		if (!clubsToCreate.length) {
			return;
		}

		for (const clubName of clubsToCreate) {
			try {
				// eslint-disable-next-line no-await-in-loop
				await clubs.create({
					name: clubName,
					hidden: 1,
				});
			} catch (err) {
				if (err && err.message !== '[[error:club-already-exists]]') {
					winston.error(`[clubs.join] Could not create new hidden club (${clubName})\n${err.stack}`);
					throw err;
				}
			}
		}
	}

	async function setclubTitleIfNotSet(clubNames, uid) {
		const ignore = ['registered-users', 'verified-users', 'unverified-users', clubs.BANNED_USERS];
		clubNames = clubNames.filter(
			clubName => !ignore.includes(clubName) && !clubs.isPrivilegeclub(clubName)
		);
		if (!clubNames.length) {
			return;
		}

		const currentTitle = await db.getObjectField(`user:${uid}`, 'clubTitle');
		if (currentTitle || currentTitle === '') {
			return;
		}

		await user.setUserField(uid, 'clubTitle', JSON.stringify(clubNames));
	}
};
