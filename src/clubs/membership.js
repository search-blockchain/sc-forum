'use strict';

const _ = require('lodash');

const db = require('../database');
const user = require('../user');
const cache = require('../cache');

module.exports = function (clubs) {
	clubs.getMembers = async function (clubName, start, stop) {
		return await db.getSortedSetRevRange(`club:${clubName}:members`, start, stop);
	};

	clubs.getMemberUsers = async function (clubNames, start, stop) {
		async function get(clubName) {
			const uids = await clubs.getMembers(clubName, start, stop);
			return await user.getUsersFields(uids, ['uid', 'username', 'picture', 'userslug']);
		}
		return await Promise.all(clubNames.map(name => get(name)));
	};

	clubs.getMembersOfclubs = async function (clubNames) {
		return await db.getSortedSetsMembers(clubNames.map(name => `club:${name}:members`));
	};

	clubs.isMember = async function (uid, clubName) {
		if (!uid || parseInt(uid, 10) <= 0 || !clubName) {
			return false;
		}

		const cacheKey = `${uid}:${clubName}`;
		let isMember = clubs.cache.get(cacheKey);
		if (isMember !== undefined) {
			return isMember;
		}
		isMember = await db.isSortedSetMember(`club:${clubName}:members`, uid);
		clubs.cache.set(cacheKey, isMember);
		return isMember;
	};

	clubs.isMembers = async function (uids, clubName) {
		if (!clubName || !uids.length) {
			return uids.map(() => false);
		}

		if (clubName === 'guests') {
			return uids.map(uid => parseInt(uid, 10) === 0);
		}

		const cachedData = {};
		const nonCachedUids = uids.filter(uid => filterNonCached(cachedData, uid, clubName));

		if (!nonCachedUids.length) {
			return uids.map(uid => cachedData[`${uid}:${clubName}`]);
		}

		const isMembers = await db.isSortedSetMembers(`club:${clubName}:members`, nonCachedUids);
		nonCachedUids.forEach((uid, index) => {
			cachedData[`${uid}:${clubName}`] = isMembers[index];
			clubs.cache.set(`${uid}:${clubName}`, isMembers[index]);
		});
		return uids.map(uid => cachedData[`${uid}:${clubName}`]);
	};

	clubs.isMemberOfclubs = async function (uid, clubs) {
		if (!uid || parseInt(uid, 10) <= 0 || !clubs.length) {
			return clubs.map(clubName => clubName === 'guests');
		}
		const cachedData = {};
		const nonCachedclubs = clubs.filter(clubName => filterNonCached(cachedData, uid, clubName));

		if (!nonCachedclubs.length) {
			return clubs.map(clubName => cachedData[`${uid}:${clubName}`]);
		}
		const nonCachedclubsMemberSets = nonCachedclubs.map(clubName => `club:${clubName}:members`);
		const isMembers = await db.isMemberOfSortedSets(nonCachedclubsMemberSets, uid);
		nonCachedclubs.forEach((clubName, index) => {
			cachedData[`${uid}:${clubName}`] = isMembers[index];
			clubs.cache.set(`${uid}:${clubName}`, isMembers[index]);
		});

		return clubs.map(clubName => cachedData[`${uid}:${clubName}`]);
	};

	function filterNonCached(cachedData, uid, clubName) {
		const isMember = clubs.cache.get(`${uid}:${clubName}`);
		const isInCache = isMember !== undefined;
		if (isInCache) {
			cachedData[`${uid}:${clubName}`] = isMember;
		}
		return !isInCache;
	}

	clubs.isMemberOfAny = async function (uid, clubs) {
		if (!clubs.length) {
			return false;
		}
		const isMembers = await clubs.isMemberOfclubs(uid, clubs);
		return isMembers.includes(true);
	};

	clubs.getMemberCount = async function (clubName) {
		const count = await db.getObjectField(`club:${clubName}`, 'memberCount');
		return parseInt(count, 10);
	};

	clubs.isMemberOfclubList = async function (uid, clubListKey) {
		let clubNames = await getclubNames(clubListKey);
		clubNames = clubs.removeEphemeralclubs(clubNames);
		if (!clubNames.length) {
			return false;
		}

		const isMembers = await clubs.isMemberOfclubs(uid, clubNames);
		return isMembers.includes(true);
	};

	clubs.isMemberOfclubsList = async function (uid, clubListKeys) {
		const members = await getclubNames(clubListKeys);

		let uniqueclubs = _.uniq(_.flatten(members));
		uniqueclubs = clubs.removeEphemeralclubs(uniqueclubs);

		const isMembers = await clubs.isMemberOfclubs(uid, uniqueclubs);
		const isclubMember = _.zipObject(uniqueclubs, isMembers);

		return members.map(clubNames => !!clubNames.find(name => isclubMember[name]));
	};

	clubs.isMembersOfclubList = async function (uids, clubListKey) {
		const results = uids.map(() => false);

		let clubNames = await getclubNames(clubListKey);
		clubNames = clubs.removeEphemeralclubs(clubNames);
		if (!clubNames.length) {
			return results;
		}
		const isclubMembers = await Promise.all(clubNames.map(name => clubs.isMembers(uids, name)));

		isclubMembers.forEach((isMembers) => {
			results.forEach((isMember, index) => {
				if (!isMember && isMembers[index]) {
					results[index] = true;
				}
			});
		});
		return results;
	};

	async function getclubNames(keys) {
		const isArray = Array.isArray(keys);
		keys = isArray ? keys : [keys];

		const cachedData = {};
		const nonCachedKeys = keys.filter((clubName) => {
			const clubMembers = cache.get(`club:${clubName}:members`);
			const isInCache = clubMembers !== undefined;
			if (isInCache) {
				cachedData[clubName] = clubMembers;
			}
			return !isInCache;
		});

		if (!nonCachedKeys.length) {
			return isArray ? keys.map(clubName => cachedData[clubName]) : cachedData[keys[0]];
		}
		const clubMembers = await db.getSortedSetsMembers(nonCachedKeys.map(name => `club:${name}:members`));

		nonCachedKeys.forEach((clubName, index) => {
			cachedData[clubName] = clubMembers[index];
			cache.set(`club:${clubName}:members`, clubMembers[index]);
		});
		return isArray ? keys.map(clubName => cachedData[clubName]) : cachedData[keys[0]];
	}
};
