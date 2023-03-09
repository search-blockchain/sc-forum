'use strict';

const _ = require('lodash');

const db = require('../database');
const user = require('../user');
const cache = require('../cache');

module.exports = function (Clubs) {
	Clubs.getMembers = async function (groupName, start, stop) {
		return await db.getSortedSetRevRange(`group:${groupName}:members`, start, stop);
	};

	Clubs.getMemberUsers = async function (groupNames, start, stop) {
		async function get(groupName) {
			const uids = await Clubs.getMembers(groupName, start, stop);
			return await user.getUsersFields(uids, ['uid', 'username', 'picture', 'userslug']);
		}
		return await Promise.all(groupNames.map(name => get(name)));
	};

	Clubs.getMembersOfGroups = async function (groupNames) {
		return await db.getSortedSetsMembers(groupNames.map(name => `group:${name}:members`));
	};

	Clubs.noUidGetClubsList = async function (req) {

	}

	Clubs.hasUidGetClubsList = async function (req) {
		const [memberGroupsNames,ownerGroupsNames] = await Promise.all([
			Clubs.getMemberGroups(req.uid),
			Clubs.getOwnerGroups(req.uid),
		]);
		const [memberGroupsData,ownerGroupsData] = await Promise.all([
			Clubs.getGroupsAndMembers(memberGroupsNames),
			Clubs.getGroupsAndMembers(ownerGroupsNames),
		]);

		let totalClub = []
		let ownerClub = []
		let memberClub = []
	
		for (let i = 0; i < ownerGroupsData.length; i++) {
			let item = ownerGroupsData[i];
			let isMember = await Clubs.isMember(req.uid, item.name);
			let isOwner = await Clubs.ownership.isOwner(req.uid, item.name);
			let obj = await Clubs.listAddNewData(isMember, isOwner,item)
			if(isOwner){
				ownerClub.push(obj)
			}
		}
		ownerClub.sort((a,b)=>{return b.memberCount - a.memberCount})
		
		for (let i = 0; i < memberGroupsData.length; i++) {
			let item = memberGroupsData[i];
			let isMember = await Clubs.isMember(req.uid, item.name);
			let isOwner = await Clubs.ownership.isOwner(req.uid, item.name);
			let obj = await Clubs.listAddNewData(isMember, isOwner,item)
			if(!isOwner && isMember){
				memberClub.push(obj)
			}
		}
		memberClub.sort((a,b)=>{return b.memberCount - a.memberCount})
	
		totalClub = totalClub.concat(ownerClub,memberClub)

		return totalClub
	}

	Clubs.isMember = async function (uid, groupName) {
		if (!uid || parseInt(uid, 10) <= 0 || !groupName) {
			return false;
		}

		const cacheKey = `${uid}:${groupName}`;
		let isMember = Clubs.cache.get(cacheKey);
		if (isMember !== undefined) {
			return isMember;
		}
		isMember = await db.isSortedSetMember(`group:${groupName}:members`, uid);
		Clubs.cache.set(cacheKey, isMember);
		return isMember;
	};

	Clubs.listAddNewData = async function (isMember, isOwner,item) {
		const tagContent = isOwner ? 'owner' : (isMember ? 'member' : '')
		const cid = item.memberPostCidsArray?.[0] || ''
		const obj = Object.assign({isMember, isOwner, tagContent, cid}, item)
		return obj;
	};

	Clubs.getMemberGroups = async function (uid) {
		let memberGroups = await db.getObject(`memberGroups:${uid}`);
		let memberGroupsNames = []
		if(memberGroups == null){
			memberGroupsNames = []
		}else{
			memberGroupsNames = memberGroups.groupsNames
		}
		return memberGroupsNames;
	};

	Clubs.getOwnerGroups = async function (uid) {
		let ownerGroups = await db.getObject(`ownerGroups:${uid}`);
		let ownerGroupsNames = []
		if(ownerGroups == null){
			ownerGroupsNames = []
		}else{
			ownerGroupsNames = ownerGroups.groupsNames
		}
		return ownerGroupsNames;
	};

	Clubs.isMembers = async function (uids, groupName) {
		if (!groupName || !uids.length) {
			return uids.map(() => false);
		}

		if (groupName === 'guests') {
			return uids.map(uid => parseInt(uid, 10) === 0);
		}

		const cachedData = {};
		const nonCachedUids = uids.filter(uid => filterNonCached(cachedData, uid, groupName));

		if (!nonCachedUids.length) {
			return uids.map(uid => cachedData[`${uid}:${groupName}`]);
		}

		const isMembers = await db.isSortedSetMembers(`group:${groupName}:members`, nonCachedUids);
		nonCachedUids.forEach((uid, index) => {
			cachedData[`${uid}:${groupName}`] = isMembers[index];
			Groups.cache.set(`${uid}:${groupName}`, isMembers[index]);
		});
		return uids.map(uid => cachedData[`${uid}:${groupName}`]);
	};

	Clubs.isMemberOfGroups = async function (uid, groups) {
		if (!uid || parseInt(uid, 10) <= 0 || !groups.length) {
			return groups.map(groupName => groupName === 'guests');
		}
		const cachedData = {};
		const nonCachedGroups = groups.filter(groupName => filterNonCached(cachedData, uid, groupName));

		if (!nonCachedGroups.length) {
			return groups.map(groupName => cachedData[`${uid}:${groupName}`]);
		}
		const nonCachedGroupsMemberSets = nonCachedGroups.map(groupName => `group:${groupName}:members`);
		const isMembers = await db.isMemberOfSortedSets(nonCachedGroupsMemberSets, uid);
		nonCachedGroups.forEach((groupName, index) => {
			cachedData[`${uid}:${groupName}`] = isMembers[index];
			Clubs.cache.set(`${uid}:${groupName}`, isMembers[index]);
		});

		return groups.map(groupName => cachedData[`${uid}:${groupName}`]);
	};

	function filterNonCached(cachedData, uid, groupName) {
		const isMember = Clubs.cache.get(`${uid}:${groupName}`);
		const isInCache = isMember !== undefined;
		if (isInCache) {
			cachedData[`${uid}:${groupName}`] = isMember;
		}
		return !isInCache;
	}

	Clubs.isMemberOfAny = async function (uid, groups) {
		if (!groups.length) {
			return false;
		}
		const isMembers = await Clubs.isMemberOfGroups(uid, groups);
		return isMembers.includes(true);
	};

	Clubs.getMemberCount = async function (groupName) {
		const count = await db.getObjectField(`group:${groupName}`, 'memberCount');
		return parseInt(count, 10);
	};

	Clubs.isMemberOfGroupList = async function (uid, groupListKey) {
		let groupNames = await getGroupNames(groupListKey);
		groupNames = Clubs.removeEphemeralClubs(groupNames);
		if (!groupNames.length) {
			return false;
		}

		const isMembers = await Clubs.isMemberOfGroups(uid, groupNames);
		return isMembers.includes(true);
	};

	Clubs.isMemberOfGroupsList = async function (uid, groupListKeys) {
		const members = await getGroupNames(groupListKeys);

		let uniqueGroups = _.uniq(_.flatten(members));
		uniqueGroups = Clubs.removeEphemeralClubs(uniqueGroups);

		const isMembers = await Clubs.isMemberOfGroups(uid, uniqueGroups);
		const isGroupMember = _.zipObject(uniqueGroups, isMembers);

		return members.map(groupNames => !!groupNames.find(name => isGroupMember[name]));
	};

	Clubs.isMembersOfGroupList = async function (uids, groupListKey) {
		const results = uids.map(() => false);

		let groupNames = await getGroupNames(groupListKey);
		groupNames = Clubs.removeEphemeralClubs(groupNames);
		if (!groupNames.length) {
			return results;
		}
		const isGroupMembers = await Promise.all(groupNames.map(name => Clubs.isMembers(uids, name)));

		isGroupMembers.forEach((isMembers) => {
			results.forEach((isMember, index) => {
				if (!isMember && isMembers[index]) {
					results[index] = true;
				}
			});
		});
		return results;
	};

	async function getGroupNames(keys) {
		const isArray = Array.isArray(keys);
		keys = isArray ? keys : [keys];

		const cachedData = {};
		const nonCachedKeys = keys.filter((groupName) => {
			const groupMembers = cache.get(`group:${groupName}:members`);
			const isInCache = groupMembers !== undefined;
			if (isInCache) {
				cachedData[groupName] = groupMembers;
			}
			return !isInCache;
		});

		if (!nonCachedKeys.length) {
			return isArray ? keys.map(groupName => cachedData[groupName]) : cachedData[keys[0]];
		}
		const groupMembers = await db.getSortedSetsMembers(nonCachedKeys.map(name => `group:${name}:members`));

		nonCachedKeys.forEach((groupName, index) => {
			cachedData[groupName] = groupMembers[index];
			cache.set(`group:${groupName}:members`, groupMembers[index]);
		});
		return isArray ? keys.map(groupName => cachedData[groupName]) : cachedData[keys[0]];
	}
};
