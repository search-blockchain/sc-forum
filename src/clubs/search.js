'use strict';

const user = require('../user');
const db = require('../database');

module.exports = function (clubs) {
	clubs.search = async function (query, options) {
		if (!query) {
			return [];
		}
		query = String(query).toLowerCase();
		let clubNames = await db.getSortedSetRange('clubs:createtime', 0, -1);
		if (!options.hideEphemeralclubs) {
			clubNames = clubs.ephemeralclubs.concat(clubNames);
		}
		clubNames = clubNames.filter(name => name.toLowerCase().includes(query) &&
			name !== clubs.BANNED_USERS && // hide banned-users in searches
			!clubs.isPrivilegeclub(name));
		clubNames = clubNames.slice(0, 100);

		let clubsData;
		if (options.showMembers) {
			clubsData = await clubs.getclubsAndMembers(clubNames);
		} else {
			clubsData = await clubs.getclubsData(clubNames);
		}
		clubsData = clubsData.filter(Boolean);
		if (options.filterHidden) {
			clubsData = clubsData.filter(club => !club.hidden);
		}
		return clubs.sort(options.sort, clubsData);
	};

	clubs.sort = function (strategy, clubs) {
		switch (strategy) {
			case 'count':
				clubs.sort((a, b) => a.slug > b.slug)
					.sort((a, b) => b.memberCount - a.memberCount);
				break;

			case 'date':
				clubs.sort((a, b) => b.createtime - a.createtime);
				break;

			case 'alpha': // intentional fall-through
			default:
				clubs.sort((a, b) => (a.slug > b.slug ? 1 : -1));
		}

		return clubs;
	};

	clubs.searchMembers = async function (data) {
		if (!data.query) {
			const users = await clubs.getOwnersAndMembers(data.clubName, data.uid, 0, 19);
			return { users: users };
		}

		const results = await user.search({
			...data,
			paginate: false,
			hardCap: -1,
		});

		const uids = results.users.map(user => user && user.uid);
		const isOwners = await clubs.ownership.isOwners(uids, data.clubName);

		results.users.forEach((user, index) => {
			if (user) {
				user.isOwner = isOwners[index];
			}
		});

		results.users.sort((a, b) => {
			if (a.isOwner && !b.isOwner) {
				return -1;
			} else if (!a.isOwner && b.isOwner) {
				return 1;
			}
			return 0;
		});
		return results;
	};
};
