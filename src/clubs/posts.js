'use strict';

const db = require('../database');
const clubs = require('.');
const privileges = require('../privileges');
const posts = require('../posts');

module.exports = function (clubs) {
	clubs.onNewPostMade = async function (postData) {
		if (!parseInt(postData.uid, 10)) {
			return;
		}

		let clubNames = await clubs.getUserclubMembership('clubs:visible:createtime', [postData.uid]);
		clubNames = clubNames[0];

		// Only process those clubs that have the cid in its memberPostCids setting (or no setting at all)
		const clubData = await clubs.getclubsFields(clubNames, ['memberPostCids']);
		clubNames = clubNames.filter((clubName, idx) => (
			!clubData[idx].memberPostCidsArray.length ||
			clubData[idx].memberPostCidsArray.includes(postData.cid)
		));

		const keys = clubNames.map(clubName => `club:${clubName}:member:pids`);
		await db.sortedSetsAdd(keys, postData.timestamp, postData.pid);
		await Promise.all(clubNames.map(name => truncateMemberPosts(name)));
	};

	async function truncateMemberPosts(clubName) {
		let lastPid = await db.getSortedSetRevRange(`club:${clubName}:member:pids`, 10, 10);
		lastPid = lastPid[0];
		if (!parseInt(lastPid, 10)) {
			return;
		}
		const score = await db.sortedSetScore(`club:${clubName}:member:pids`, lastPid);
		await db.sortedSetsRemoveRangeByScore([`club:${clubName}:member:pids`], '-inf', score);
	}

	clubs.getLatestMemberPosts = async function (clubName, max, uid) {
		let pids = await db.getSortedSetRevRange(`club:${clubName}:member:pids`, 0, max - 1);
		pids = await privileges.posts.filter('topics:read', pids, uid);
		return await posts.getPostSummaryByPids(pids, uid, { stripTags: false });
	};
};
