'use strict';

const user = require('../user');
const db = require('../database');
const plugins = require('../plugins');
const slugify = require('../slugify');

const Club = module.exports;

require('./data')(Club);
require('./create')(Club);
require('./delete')(Club);
require('./update')(Club);
require('./invite')(Club);
require('./membership')(Club);
require('./ownership')(Club);
require('./search')(Club);
require('./cover')(Club);
require('./posts')(Club);
require('./user')(Club);
require('./join')(Club);
require('./leave')(Club);
require('./cache')(Club);

Club.BANNED_USERS = 'banned-users';

Club.ephemeralClubs = ['guests', 'spiders'];

Club.systemClubs = [
	'registered-users',
	'verified-users',
	'unverified-users',
	Club.BANNED_USERS,
	'administrators',
	'Global Moderators',
];

Club.getEphemeralClub = function (clubName) {
	return {
		name: clubName,
		slug: slugify(clubName),
		description: '',
		hidden: 0,
		system: 1,
	};
};

Club.removeEphemeralClubs = function (clubs) {
	for (let x = clubs.length; x >= 0; x -= 1) {
		if (Club.ephemeralClubs.includes(clubs[x])) {
			clubs.splice(x, 1);
		}
	}

	return clubs;
};

const isPrivilegeClubRegex = /^cid:\d+:privileges:[\w\-:]+$/;
Club.isPrivilegeClub = function (clubName) {
	return isPrivilegeClubRegex.test(clubName);
};

Club.getClubsFromSet = async function (set, start, stop) {
	let clubNames;
	if (set === 'clubs:visible:name') {
		clubNames = await db.getSortedSetRangeByLex(set, '-', '+', start, stop - start + 1);
	} else {
		clubNames = await db.getSortedSetRevRange(set, start, stop);
	}
	if (set === 'clubs:visible:name') {
		clubNames = clubNames.map(name => name.split(':')[1]);
	}

	return await Club.getClubsAndMembers(clubNames);
};

Club.getClubsBySort = async function (sort, start, stop) {
	let set = 'clubs:visible:name';
	if (sort === 'count') {
		set = 'clubs:visible:memberCount';
	} else if (sort === 'date') {
		set = 'clubs:visible:createtime';
	}
	return await Club.getClubsFromSet(set, start, stop);
};

Club.getNonPrivilegeClubs = async function (set, start, stop) {
	let clubNames = await db.getSortedSetRevRange(set, start, stop);
	clubNames = clubNames.concat(Club.ephemeralClubs).filter(clubName => !Club.isPrivilegeClub(clubName));
	const clubsData = await Club.getClubsData(clubNames);
	return clubsData.filter(Boolean);
};

Club.getClubs = async function (set, start, stop) {
	return await db.getSortedSetRevRange(set, start, stop);
};

Club.getClubsAndMembers = async function (clubNames) {
	const [clubs, members] = await Promise.all([
		Club.getClubsData(clubNames),
		Club.getMemberUsers(clubNames, 0, 9),
	]);
	clubs.forEach((club, index) => {
		if (club) {
			club.members = members[index] || [];
			club.truncated = club.memberCount > club.members.length;
		}
	});
	return clubs;
};

Club.get = async function (clubName, options) {
	if (!clubName) {
		throw new Error('[[error:invalid-club]]');
	}

	let stop = -1;

	if (options.truncateUserList) {
		stop = (parseInt(options.userListCount, 10) || 4) - 1;
	}

	const [clubData, members, pending, invited, isMember, isPending, isInvited, isOwner] = await Promise.all([
		Club.getClubData(clubName),
		Club.getOwnersAndMembers(clubName, options.uid, 0, stop),
		Club.getUsersFromSet(`club:${clubName}:pending`, ['username', 'userslug', 'picture']),
		Club.getUsersFromSet(`club:${clubName}:invited`, ['username', 'userslug', 'picture']),
		Club.isMember(options.uid, clubName),
		Club.isPending(options.uid, clubName),
		Club.isInvited(options.uid, clubName),
		Club.ownership.isOwner(options.uid, clubName),
	]);

	if (!clubData) {
		return null;
	}
	const descriptionParsed = await plugins.hooks.fire('filter:parse.raw', String(clubData.description || ''));
	clubData.descriptionParsed = descriptionParsed;
	clubData.members = members;
	clubData.membersNextStart = stop + 1;
	clubData.pending = pending.filter(Boolean);
	clubData.invited = invited.filter(Boolean);
	clubData.isMember = isMember;
	clubData.isPending = isPending;
	clubData.isInvited = isInvited;
	clubData.isOwner = isOwner;
	const results = await plugins.hooks.fire('filter:club.get', { club: clubData });
	return results.club;
};

Club.getOwners = async function (clubName) {
	return await db.getSetMembers(`club:${clubName}:owners`);
};

Club.getOwnersAndMembers = async function (clubName, uid, start, stop) {
	const ownerUids = await db.getSetMembers(`club:${clubName}:owners`);
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
		let batch = await user.getUsersFromSet(`club:${clubName}:members`, uid, start, stop);
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
	const result = await plugins.hooks.fire('filter:club.getOwnersAndMembers', {
		users: returnUsers,
		uid: uid,
		start: start,
		stop: stop,
	});
	return result.users;
};

Club.getByClubslug = async function (slug, options) {
	options = options || {};
	const clubName = await db.getObjectField('clubslug:clubname', slug);
	if (!clubName) {
		throw new Error('[[error:no-club]]');
	}
	return await Club.get(clubName, options);
};

Club.getClubNameByClubSlug = async function (slug) {
	return await db.getObjectField('clubslug:clubname', slug);
};

Club.isPrivate = async function (clubName) {
	return await isFieldOn(clubName, 'private');
};

Club.isHidden = async function (clubName) {
	return await isFieldOn(clubName, 'hidden');
};

async function isFieldOn(clubName, field) {
	const value = await db.getObjectField(`club:${clubName}`, field);
	return parseInt(value, 10) === 1;
}

Club.exists = async function (name) {
	if (Array.isArray(name)) {
		const slugs = name.map(clubName => slugify(clubName));
		const isMembersOfRealClubs = await db.isSortedSetMembers('clubs:createtime', name);
		const isMembersOfEphemeralClubs = slugs.map(slug => Club.ephemeralClubs.includes(slug));
		return name.map((n, index) => isMembersOfRealClubs[index] || isMembersOfEphemeralClubs[index]);
	}
	const slug = slugify(name);
	const isMemberOfRealClubs = await db.isSortedSetMember('clubs:createtime', name);
	const isMemberOfEphemeralClubs = Club.ephemeralClubs.includes(slug);
	return isMemberOfRealClubs || isMemberOfEphemeralClubs;
};

Club.existsBySlug = async function (slug) {
	if (Array.isArray(slug)) {
		return await db.isObjectFields('clubslug:clubname', slug);
	}
	return await db.isObjectField('clubslug:clubname', slug);
};

require('../promisify')(Club);
