'use strict';

const cacheCreate = require('../cache/lru');

module.exports = function (Clubs) {
	Clubs.cache = cacheCreate({
		name: 'club',
		max: 40000,
		ttl: 0,
	});

	Clubs.clearCache = function (uid, clubNames) {
		if (!Array.isArray(clubNames)) {
			clubNames = [clubNames];
		}
		const keys = clubNames.map(name => `${uid}:${name}`);
		Clubs.cache.del(keys);
	};
};
