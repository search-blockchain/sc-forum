'use strict';

const db = require('../database');
const plugins = require('../plugins');

module.exports = function (clubs) {
	clubs.ownership = {};

	clubs.ownership.isOwner = async function (uid, clubName) {
		if (!(parseInt(uid, 10) > 0)) {
			return false;
		}
		return await db.isSetMember(`club:${clubName}:owners`, uid);
	};

	clubs.ownership.isOwners = async function (uids, clubName) {
		if (!Array.isArray(uids)) {
			return [];
		}

		return await db.isSetMembers(`club:${clubName}:owners`, uids);
	};

	clubs.ownership.grant = async function (toUid, clubName) {
		await db.setAdd(`club:${clubName}:owners`, toUid);
		plugins.hooks.fire('action:club.grantOwnership', { uid: toUid, clubName: clubName });
	};

	clubs.ownership.rescind = async function (toUid, clubName) {
		// If the owners set only contains one member (and toUid is that member), error out!
		const numOwners = await db.setCount(`club:${clubName}:owners`);
		const isOwner = await db.isSortedSetMember(`club:${clubName}:owners`);
		if (numOwners <= 1 && isOwner) {
			throw new Error('[[error:club-needs-owner]]');
		}
		await db.setRemove(`club:${clubName}:owners`, toUid);
		plugins.hooks.fire('action:club.rescindOwnership', { uid: toUid, clubName: clubName });
	};
};
