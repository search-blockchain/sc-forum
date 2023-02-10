'use strict';

const plugins = require('../plugins');
const slugify = require('../slugify');
const db = require('../database');
const batch = require('../batch');

module.exports = function (Clubs) {
	Clubs.destroy = async function (clubNames) {
		if (!Array.isArray(clubNames)) {
			clubNames = [clubNames];
		}

		let clubsData = await Clubs.getClubsData(clubNames);
		clubsData = clubsData.filter(Boolean);
		if (!clubsData.length) {
			return;
		}
		const keys = [];
		clubNames.forEach((clubName) => {
			keys.push(
				`club:${clubName}`,
				`club:${clubName}:members`,
				`club:${clubName}:pending`,
				`club:${clubName}:invited`,
				`club:${clubName}:owners`,
				`club:${clubName}:member:pids`
			);
		});
		const sets = clubNames.map(clubName => `${clubName.toLowerCase()}:${clubName}`);
		const fields = clubNames.map(clubName => slugify(clubName));

		await Promise.all([
			db.deleteAll(keys),
			db.sortedSetRemove([
				'clubs:createtime',
				'clubs:visible:createtime',
				'clubs:visible:memberCount',
			], clubNames),
			db.sortedSetRemove('clubs:visible:name', sets),
			db.deleteObjectFields('clubslug:clubname', fields),
			removeClubsFromPrivilegeClubs(clubNames),
		]);
		Clubs.cache.reset();
		plugins.hooks.fire('action:clubs.destroy', { clubs: clubsData });
	};

	async function removeClubsFromPrivilegeClubs(clubNames) {
		await batch.processSortedSet('clubs:createtime', async (otherClubs) => {
			const privilegeClubs = otherClubs.filter(club => Clubs.isPrivilegeClub(club));
			const keys = privilegeClubs.map(club => `club:${club}:members`);
			await db.sortedSetRemove(keys, clubNames);
		}, {
			batch: 500,
		});
	}
};
