'use strict';

const user = require('../user');
const db = require('../database');
const plugins = require('../plugins');
const slugify = require('../slugify');

const Clubs = module.exports;

require('./data')(Clubs);
require('./create')(Clubs);
require('./delete')(Clubs);
require('./update')(Clubs);
require('./invite')(Clubs);
require('./membership')(Clubs);
require('./ownership')(Clubs);
require('./search')(Clubs);
require('./cover')(Clubs);
require('./posts')(Clubs);
require('./user')(Clubs);
require('./join')(Clubs);
require('./leave')(Clubs);
require('./cache')(Clubs);

Clubs.BANNED_USERS = 'banned-users';

Clubs.ephemeralClubs = ['guests', 'spiders'];

Clubs.systemClubs = [
	'registered-users',
	'verified-users',
	'unverified-users',
	Clubs.BANNED_USERS,
	'administrators',
	'Global Moderators',
];

Clubs.getEphemeralClub = function (groupName) {
	return {
		name: groupName,
		slug: slugify(groupName),
		description: '',
		hidden: 0,
		system: 1,
	};
};

Clubs.getGroupsBySort = async function (sort, start, stop) {
	let set = 'groups:visible:name';
	if (sort === 'count') {
		set = 'groups:visible:memberCount';
	} else if (sort === 'date') {
		set = 'groups:visible:createtime';
	}
	return await Clubs.getGroupsFromSet(set, start, stop);
};

Clubs.getGroupsBySortDeleteOwnerAndMember = async function (sort, start, stop,uid) {
	let set = 'groups:visible:name';
	if (sort === 'count') {
		set = 'groups:visible:memberCount';
	} else if (sort === 'date') {
		set = 'groups:visible:createtime';
	}
	return await Clubs.getGroupsFromSetDeleteOwnerAndMember(set, start, stop,uid);
};

Clubs.getGroupsFromSet = async function (set, start, stop) {
	let clubNames;
	if (set === 'groups:visible:name') {
		clubNames = await db.getSortedSetRangeByLex(set, '-', '+', start, stop - start + 1);
	} else {
		clubNames = await db.getSortedSetRevRange(set, start, stop);
	}
	if (set === 'groups:visible:name') {
		clubNames = clubNames.map(name => name.split(':')[1]);
	}

	return await Clubs.getGroupsAndMembers(clubNames);
};

Clubs.getGroupsFromSetDeleteOwnerAndMember = async function (set, start, stop,uid) {
	let clubNames;
	if (set === 'groups:visible:name') {
		clubNames = await db.getSortedSetRangeByLex(set, '-', '+', start, stop - start + 1);
	} else {
		let totalNotQueryGroups = await Clubs.getOwnerAndMemberGroupsNamesByUid(uid)
		clubNames = await db.getSortedSetRevRangeDeleteOwnerAndMember(set, start, stop,totalNotQueryGroups);
	}
	if (set === 'groups:visible:name') {
		clubNames = clubNames.map(name => name.split(':')[1]);
	}

	return await Clubs.getGroupsAndMembers(clubNames);
};

Clubs.getOwnerAndMemberGroupsNamesByUid = async function (uid) {
	let totalNotQueryGroups = [];
	let ownerGroups = await db.getObject(`ownerGroups:${uid}`)
	let memberGroups = await db.getObject(`memberGroups:${uid}`);

	let ownerGroupsNames = []
	let memberGroupsNames = []

	if(ownerGroups != null){
		ownerGroupsNames = ownerGroups.groupsNames
	}

	if(memberGroups != null){
		memberGroupsNames = memberGroups.groupsNames
	}
	
	totalNotQueryGroups = totalNotQueryGroups.concat(ownerGroupsNames,memberGroupsNames)

	return totalNotQueryGroups
}

Clubs.getGroupsAndMembers = async function (clubNames) {
	const [clubs, members] = await Promise.all([
		Clubs.getClubsData(clubNames),
		Clubs.getMemberUsers(clubNames, 0, 9),
	]);
	clubs.forEach((club, index) => {
		if (club) {
			club.members = members[index] || [];
			club.truncated = club.memberCount > club.members.length;
		}
	});
	return clubs;
};

Clubs.removeEphemeralClubs = function (groups) {
	for (let x = groups.length; x >= 0; x -= 1) {
		if (Clubs.ephemeralClubs.includes(groups[x])) {
			groups.splice(x, 1);
		}
	}

	return groups;
};

const isPrivilegeClubRegex = /^cid:\d+:privileges:[\w\-:]+$/;
Clubs.isPrivilegeClub = function (groupName) {
	return isPrivilegeClubRegex.test(groupName);
};

Clubs.getClubsFromSet = async function (set, start, stop) {
	let groupNames;
	if (set === 'groups:visible:name') {
		groupNames = await db.getSortedSetRangeByLex(set, '-', '+', start, stop - start + 1);
	} else {
		groupNames = await db.getSortedSetRevRange(set, start, stop);
	}
	if (set === 'groups:visible:name') {
		groupNames = groupNames.map(name => name.split(':')[1]);
	}

	return await Clubs.getClubsFromSet(groupNames);
};

Clubs.getClubsBySort = async function (sort, start, stop) {
	let set = 'groups:visible:name';
	if (sort === 'count') {
		set = 'groups:visible:memberCount';
	} else if (sort === 'date') {
		set = 'groups:visible:createtime';
	}
	return await Clubs.getClubsFromSet(set, start, stop);
};

Clubs.getNonPrivilegeClubs = async function (set, start, stop) {
	let groupNames = await db.getSortedSetRevRange(set, start, stop);
	groupNames = groupNames.concat(Clubs.ephemeralClubs).filter(groupName => !Clubs.isPrivilegeClub(groupName));
	const groupsData = await Clubs.getClubsData(groupNames);
	return groupsData.filter(Boolean);
};

Clubs.getClubs = async function (set, start, stop) {
	return await db.getSortedSetRevRange(set, start, stop);
};

Clubs.getClubsFromSet = async function (groupNames) {
	const [groups, members] = await Promise.all([
		Clubs.getClubsData(groupNames),
		Clubs.getMemberUsers(groupNames, 0, 9),
	]);
	groups.forEach((group, index) => {
		if (group) {
			group.members = members[index] || [];
			group.truncated = group.memberCount > group.members.length;
		}
	});
	return groups;
};

Clubs.get = async function (groupName, options) {
	if (!groupName) {
		throw new Error('[[error:invalid-group]]');
	}

	let stop = -1;

	if (options.truncateUserList) {
		stop = (parseInt(options.userListCount, 10) || 4) - 1;
	}

	const [groupData, members, pending, invited, isMember, isPending, isInvited, isOwner] = await Promise.all([
		Clubs.getClubData(groupName),
		Clubs.getOwnersAndMembers(groupName, options.uid, 0, stop),
		Clubs.getUsersFromSet(`group:${groupName}:pending`, ['username', 'userslug', 'picture']),
		Clubs.getUsersFromSet(`group:${groupName}:invited`, ['username', 'userslug', 'picture']),
		Clubs.isMember(options.uid, groupName),
		Clubs.isPending(options.uid, groupName),
		Clubs.isInvited(options.uid, groupName),
		Clubs.ownership.isOwner(options.uid, groupName),
	]);

	if (!groupData) {
		return null;
	}
	const descriptionParsed = await plugins.hooks.fire('filter:parse.raw', String(groupData.description || ''));
	groupData.descriptionParsed = descriptionParsed;
	groupData.members = members;
	groupData.membersNextStart = stop + 1;
	groupData.pending = pending.filter(Boolean);
	groupData.invited = invited.filter(Boolean);
	groupData.isMember = isMember;
	groupData.isPending = isPending;
	groupData.isInvited = isInvited;
	groupData.isOwner = isOwner;
	const results = await plugins.hooks.fire('filter:group.get', { group: groupData });
	return results.group;
};

Clubs.getOwners = async function (groupName) {
	return await db.getSetMembers(`group:${groupName}:owners`);
};

Clubs.getOwnersAndMembers = async function (groupName, uid, start, stop) {
	const ownerUids = await db.getSetMembers(`group:${groupName}:owners`);
	const countToReturn = stop - start + 1;
	const ownerUidsOnPage = ownerUids.slice(start, stop !== -1 ? stop + 1 : undefined);
	const owners = await user.getUsers(ownerUidsOnPage, uid);
	owners.forEach((user) => {
		if (user) {
			user.isOwner = true;
		}
	});

	let done = false;
	let returnUsers = owners;
	let memberStart = start - ownerUids.length;
	let memberStop = memberStart + countToReturn - 1;
	memberStart = Math.max(0, memberStart);
	memberStop = Math.max(0, memberStop);
	async function addMembers(start, stop) {
		let batch = await user.getUsersFromSet(`group:${groupName}:members`, uid, start, stop);
		if (!batch.length) {
			done = true;
		}
		batch = batch.filter(user => user && user.uid && !ownerUids.includes(user.uid.toString()));
		returnUsers = returnUsers.concat(batch);
	}

	if (stop === -1) {
		await addMembers(memberStart, -1);
	} else {
		while (returnUsers.length < countToReturn && !done) {
			/* eslint-disable no-await-in-loop */
			await addMembers(memberStart, memberStop);
			memberStart = memberStop + 1;
			memberStop = memberStart + countToReturn - 1;
		}
	}
	returnUsers = countToReturn > 0 ? returnUsers.slice(0, countToReturn) : returnUsers;
	const result = await plugins.hooks.fire('filter:group.getOwnersAndMembers', {
		users: returnUsers,
		uid: uid,
		start: start,
		stop: stop,
	});
	return result.users;
};

Clubs.getByClubSlug = async function (slug, options) {
	options = options || {};
	const groupName = await db.getObjectField('groupslug:groupname', slug);
	if (!groupName) {
		throw new Error('[[error:no-group]]');
	}
	return await Clubs.get(groupName, options);
};

Clubs.getClubNameByClubSlug = async function (slug) {
	return await db.getObjectField('groupslug:groupname', slugify(slug));
};

Clubs.isPrivate = async function (groupName) {
	return await isFieldOn(groupName, 'private');
};

Clubs.isHidden = async function (groupName) {
	return await isFieldOn(groupName, 'hidden');
};

async function isFieldOn(groupName, field) {
	const value = await db.getObjectField(`group:${groupName}`, field);
	return parseInt(value, 10) === 1;
}

Clubs.exists = async function (name) {
	if (Array.isArray(name)) {
		const slugs = name.map(groupName => slugify(groupName));
		const isMembersOfRealClubs = await db.isSortedSetMembers('groups:createtime', name);
		const isMembersOfEphemeralClubs = slugs.map(slug => Clubs.ephemeralClubs.includes(slug));
		return name.map((n, index) => isMembersOfRealClubs[index] || isMembersOfEphemeralClubs[index]);
	}
	const slug = slugify(name);
	const isMemberOfRealClubs = await db.isSortedSetMember('groups:createtime', name);
	const isMemberOfEphemeralClubs = Clubs.ephemeralClubs.includes(slug);
	return isMemberOfRealClubs || isMemberOfEphemeralClubs;
};

Clubs.existsBySlug = async function (slug) {
	if (Array.isArray(slug)) {
		return await db.isObjectFields('groupslug:groupname', slug);
	}
	return await db.isObjectField('groupslug:groupname', slug);
};

require('../promisify')(Clubs);
