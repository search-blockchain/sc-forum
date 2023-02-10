'use strict';

const meta = require('../meta');
const plugins = require('../plugins');
const slugify = require('../slugify');
const db = require('../database');

module.exports = function (Clubs) {
	Clubs.create = async function (data) {
		const isSystem = isSystemClub(data);
		const timestamp = data.timestamp || Date.now();
		let disableJoinRequests = parseInt(data.disableJoinRequests, 10) === 1 ? 1 : 0;
		if (data.name === 'administrators') {
			disableJoinRequests = 1;
		}
		const disableLeave = parseInt(data.disableLeave, 10) === 1 ? 1 : 0;
		const isHidden = parseInt(data.hidden, 10) === 1;

		Clubs.validateClubName(data.name);

		const exists = await meta.userOrClubExists(data.name);
		if (exists) {
			throw new Error('[[error:club-already-exists]]');
		}

		const memberCount = data.hasOwnProperty('ownerUid') ? 1 : 0;
		const isPrivate = data.hasOwnProperty('private') && data.private !== undefined ? parseInt(data.private, 10) === 1 : true;
		let clubData = {
			name: data.name,
			slug: slugify(data.name),
			createtime: timestamp,
			userTitle: data.userTitle || data.name,
			userTitleEnabled: parseInt(data.userTitleEnabled, 10) === 1 ? 1 : 0,
			description: data.description || '',
			memberCount: memberCount,
			hidden: isHidden ? 1 : 0,
			system: isSystem ? 1 : 0,
			private: isPrivate ? 1 : 0,
			disableJoinRequests: disableJoinRequests,
			disableLeave: disableLeave,
		};

		await plugins.hooks.fire('filter:club.create', { club: clubData, data: data });

		await db.sortedSetAdd('clubs:createtime', clubData.createtime, clubData.name);
		await db.setObject(`club:${clubData.name}`, clubData);

		if (data.hasOwnProperty('ownerUid')) {
			await db.setAdd(`club:${clubData.name}:owners`, data.ownerUid);
			await db.sortedSetAdd(`club:${clubData.name}:members`, timestamp, data.ownerUid);
		}

		if (!isHidden && !isSystem) {
			await db.sortedSetAddBulk([
				['clubs:visible:createtime', timestamp, clubData.name],
				['clubs:visible:memberCount', clubData.memberCount, clubData.name],
				['clubs:visible:name', 0, `${clubData.name.toLowerCase()}:${clubData.name}`],
			]);
		}

		await db.setObjectField('clubslug:clubname', clubData.slug, clubData.name);

		clubData = await Clubs.getClubData(clubData.name);
		plugins.hooks.fire('action:club.create', { club: clubData });
		return clubData;
	};

	function isSystemClub(data) {
		return data.system === true || parseInt(data.system, 10) === 1 ||
			Clubs.systemClubs.includes(data.name) ||
			Clubs.isPrivilegeClub(data.name);
	}

	Clubs.validateClubName = function (name) {
		if (!name) {
			throw new Error('[[error:club-name-too-short]]');
		}

		if (typeof name !== 'string') {
			throw new Error('[[error:invalid-club-name]]');
		}

		if (!Clubs.isPrivilegeClub(name) && name.length > meta.config.maximumClubNameLength) {
			throw new Error('[[error:club-name-too-long]]');
		}

		if (name === 'guests' || (!Clubs.isPrivilegeClub(name) && name.includes(':'))) {
			throw new Error('[[error:invalid-club-name]]');
		}

		if (name.includes('/') || !slugify(name)) {
			throw new Error('[[error:invalid-club-name]]');
		}
	};
};
