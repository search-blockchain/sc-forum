'use strict';

const validator = require('validator');
const nconf = require('nconf');

const db = require('../database');
const plugins = require('../plugins');
const utils = require('../utils');
const translator = require('../translator');

const intFields = [
	'createtime', 'memberCount', 'hidden', 'system', 'private',
	'userTitleEnabled', 'disableJoinRequests', 'disableLeave',
];

module.exports = function (Clubs) {
	Clubs.getClubsFields = async function (clubNames, fields) {
		if (!Array.isArray(clubNames) || !clubNames.length) {
			return [];
		}

		const ephemeralIdx = clubNames.reduce((memo, cur, idx) => {
			if (Clubs.ephemeralClubs.includes(cur)) {
				memo.push(idx);
			}
			return memo;
		}, []);

		const keys = clubNames.map(clubName => `club:${clubName}`);
		const clubData = await db.getObjects(keys, fields);
		if (ephemeralIdx.length) {
			ephemeralIdx.forEach((idx) => {
				clubData[idx] = Clubs.getEphemeralClub(clubNames[idx]);
			});
		}

		clubData.forEach(club => modifyClub(club, fields));

		const results = await plugins.hooks.fire('filter:clubs.get', { clubs: clubData });
		return results.clubs;
	};

	Clubs.getClubsData = async function (clubNames) {
		return await Clubs.getClubsFields(clubNames, []);
	};

	Clubs.getClubData = async function (clubName) {
		const clubsData = await Clubs.getClubsData([clubName]);
		return Array.isArray(clubsData) && clubsData[0] ? clubsData[0] : null;
	};

	Clubs.getClubField = async function (clubName, field) {
		const clubData = await Clubs.getClubFields(clubName, [field]);
		return clubData ? clubData[field] : null;
	};

	Clubs.getClubFields = async function (clubName, fields) {
		const clubs = await Clubs.getClubsFields([clubName], fields);
		return clubs ? clubs[0] : null;
	};

	Clubs.setClubField = async function (clubName, field, value) {
		await db.setObjectField(`club:${clubName}`, field, value);
		plugins.hooks.fire('action:club.set', { field: field, value: value, type: 'set' });
	};
};

function modifyClub(club, fields) {
	if (club) {
		db.parseIntFields(club, intFields, fields);

		escapeClubData(club);
		club.userTitleEnabled = ([null, undefined].includes(club.userTitleEnabled)) ? 1 : club.userTitleEnabled;
		club.labelColor = validator.escape(String(club.labelColor || '#000000'));
		club.textColor = validator.escape(String(club.textColor || '#ffffff'));
		club.icon = validator.escape(String(club.icon || ''));
		club.createtimeISO = utils.toISOString(club.createtime);
		club.private = ([null, undefined].includes(club.private)) ? 1 : club.private;
		club.memberPostCids = club.memberPostCids || '';
		club.memberPostCidsArray = club.memberPostCids.split(',').map(cid => parseInt(cid, 10)).filter(Boolean);

		club['cover:thumb:url'] = club['cover:thumb:url'] || club['cover:url'];

		if (club['cover:url']) {
			club['cover:url'] = club['cover:url'].startsWith('http') ? club['cover:url'] : (nconf.get('relative_path') + club['cover:url']);
		} else {
			club['cover:url'] = require('../coverPhoto').getDefaultClubCover(club.name);
		}

		if (club['cover:thumb:url']) {
			club['cover:thumb:url'] = club['cover:thumb:url'].startsWith('http') ? club['cover:thumb:url'] : (nconf.get('relative_path') + club['cover:thumb:url']);
		} else {
			club['cover:thumb:url'] = require('../coverPhoto').getDefaultClubCover(club.name);
		}

		club['cover:position'] = validator.escape(String(club['cover:position'] || '50% 50%'));
	}
}

function escapeClubData(club) {
	if (club) {
		club.nameEncoded = encodeURIComponent(club.name);
		club.displayName = validator.escape(String(club.name));
		club.description = validator.escape(String(club.description || ''));
		club.userTitle = validator.escape(String(club.userTitle || ''));
		club.userTitleEscaped = translator.escape(club.userTitle);
	}
}
