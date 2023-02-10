'use strict';

const winston = require('winston');

const categories = require('../categories');
const plugins = require('../plugins');
const slugify = require('../slugify');
const db = require('../database');
const user = require('../user');
const batch = require('../batch');
const meta = require('../meta');
const cache = require('../cache');


module.exports = function (clubs) {
	clubs.update = async function (clubName, values) {
		const exists = await db.exists(`club:${clubName}`);
		if (!exists) {
			throw new Error('[[error:no-club]]');
		}

		({ values } = await plugins.hooks.fire('filter:club.update', {
			clubName: clubName,
			values: values,
		}));

		// Cast some values as bool (if not boolean already)
		// 'true' and '1' = true, everything else false
		['userTitleEnabled', 'private', 'hidden', 'disableJoinRequests', 'disableLeave'].forEach((prop) => {
			if (values.hasOwnProperty(prop) && typeof values[prop] !== 'boolean') {
				values[prop] = values[prop] === 'true' || parseInt(values[prop], 10) === 1;
			}
		});

		const payload = {
			description: values.description || '',
			icon: values.icon || '',
			labelColor: values.labelColor || '#000000',
			textColor: values.textColor || '#ffffff',
		};

		if (values.hasOwnProperty('userTitle')) {
			payload.userTitle = values.userTitle || '';
		}

		if (values.hasOwnProperty('userTitleEnabled')) {
			payload.userTitleEnabled = values.userTitleEnabled ? '1' : '0';
		}

		if (values.hasOwnProperty('hidden')) {
			payload.hidden = values.hidden ? '1' : '0';
		}

		if (values.hasOwnProperty('private')) {
			payload.private = values.private ? '1' : '0';
		}

		if (values.hasOwnProperty('disableJoinRequests')) {
			payload.disableJoinRequests = values.disableJoinRequests ? '1' : '0';
		}

		if (values.hasOwnProperty('disableLeave')) {
			payload.disableLeave = values.disableLeave ? '1' : '0';
		}

		if (values.hasOwnProperty('name')) {
			await checkNameChange(clubName, values.name);
		}

		if (values.hasOwnProperty('private')) {
			await updatePrivacy(clubName, values.private);
		}

		if (values.hasOwnProperty('hidden')) {
			await updateVisibility(clubName, values.hidden);
		}

		if (values.hasOwnProperty('memberPostCids')) {
			const validCids = await categories.getCidsByPrivilege('categories:cid', clubName, 'topics:read');
			const cidsArray = values.memberPostCids.split(',').map(cid => parseInt(cid.trim(), 10)).filter(Boolean);
			payload.memberPostCids = cidsArray.filter(cid => validCids.includes(cid)).join(',') || '';
		}

		await db.setObject(`club:${clubName}`, payload);
		await clubs.renameclub(clubName, values.name);

		plugins.hooks.fire('action:club.update', {
			name: clubName,
			values: values,
		});
	};

	async function updateVisibility(clubName, hidden) {
		if (hidden) {
			await db.sortedSetRemoveBulk([
				['clubs:visible:createtime', clubName],
				['clubs:visible:memberCount', clubName],
				['clubs:visible:name', `${clubName.toLowerCase()}:${clubName}`],
			]);
			return;
		}
		const clubData = await db.getObjectFields(`club:${clubName}`, ['createtime', 'memberCount']);
		await db.sortedSetAddBulk([
			['clubs:visible:createtime', clubData.createtime, clubName],
			['clubs:visible:memberCount', clubData.memberCount, clubName],
			['clubs:visible:name', 0, `${clubName.toLowerCase()}:${clubName}`],
		]);
	}

	clubs.hide = async function (clubName) {
		await showHide(clubName, 'hidden');
	};

	clubs.show = async function (clubName) {
		await showHide(clubName, 'show');
	};

	async function showHide(clubName, hidden) {
		hidden = hidden === 'hidden';
		await Promise.all([
			db.setObjectField(`club:${clubName}`, 'hidden', hidden ? 1 : 0),
			updateVisibility(clubName, hidden),
		]);
	}

	async function updatePrivacy(clubName, isPrivate) {
		const clubData = await clubs.getclubFields(clubName, ['private']);
		const currentlyPrivate = clubData.private === 1;
		if (!currentlyPrivate || currentlyPrivate === isPrivate) {
			return;
		}
		const pendingUids = await db.getSetMembers(`club:${clubName}:pending`);
		if (!pendingUids.length) {
			return;
		}

		winston.verbose(`[clubs.update] club is now public, automatically adding ${pendingUids.length} new members, who were pending prior.`);

		for (const uid of pendingUids) {
			/* eslint-disable no-await-in-loop */
			await clubs.join(clubName, uid);
		}
		await db.delete(`club:${clubName}:pending`);
	}

	async function checkNameChange(currentName, newName) {
		if (clubs.isPrivilegeclub(newName)) {
			throw new Error('[[error:invalid-club-name]]');
		}
		const currentSlug = slugify(currentName);
		const newSlug = slugify(newName);
		if (currentName === newName || currentSlug === newSlug) {
			return;
		}
		clubs.validateclubName(newName);
		const [club, exists] = await Promise.all([
			clubs.getclubData(currentName),
			clubs.existsBySlug(newSlug),
		]);

		if (exists) {
			throw new Error('[[error:club-already-exists]]');
		}

		if (!club) {
			throw new Error('[[error:no-club]]');
		}

		if (club.system) {
			throw new Error('[[error:not-allowed-to-rename-system-club]]');
		}
	}

	clubs.renameclub = async function (oldName, newName) {
		if (oldName === newName || !newName || String(newName).length === 0) {
			return;
		}
		const club = await db.getObject(`club:${oldName}`);
		if (!club) {
			return;
		}

		const exists = await clubs.exists(newName);
		if (exists) {
			throw new Error('[[error:club-already-exists]]');
		}

		await updateMemberclubTitles(oldName, newName);
		await updateNavigationItems(oldName, newName);
		await updateWidgets(oldName, newName);
		await updateConfig(oldName, newName);
		await db.setObject(`club:${oldName}`, { name: newName, slug: slugify(newName) });
		await db.deleteObjectField('clubslug:clubname', club.slug);
		await db.setObjectField('clubslug:clubname', slugify(newName), newName);

		const allclubs = await db.getSortedSetRange('clubs:createtime', 0, -1);
		const keys = allclubs.map(club => `club:${club}:members`);
		await renameclubsMember(keys, oldName, newName);
		cache.del(keys);

		await db.rename(`club:${oldName}`, `club:${newName}`);
		await db.rename(`club:${oldName}:members`, `club:${newName}:members`);
		await db.rename(`club:${oldName}:owners`, `club:${newName}:owners`);
		await db.rename(`club:${oldName}:pending`, `club:${newName}:pending`);
		await db.rename(`club:${oldName}:invited`, `club:${newName}:invited`);
		await db.rename(`club:${oldName}:member:pids`, `club:${newName}:member:pids`);

		await renameclubsMember(['clubs:createtime', 'clubs:visible:createtime', 'clubs:visible:memberCount'], oldName, newName);
		await renameclubsMember(['clubs:visible:name'], `${oldName.toLowerCase()}:${oldName}`, `${newName.toLowerCase()}:${newName}`);

		plugins.hooks.fire('action:club.rename', {
			old: oldName,
			new: newName,
		});
		clubs.cache.reset();
	};

	async function updateMemberclubTitles(oldName, newName) {
		await batch.processSortedSet(`club:${oldName}:members`, async (uids) => {
			let usersData = await user.getUsersData(uids);
			usersData = usersData.filter(userData => userData && userData.clubTitleArray.includes(oldName));

			usersData.forEach((userData) => {
				userData.newTitleArray = userData.clubTitleArray.map(oldTitle => (oldTitle === oldName ? newName : oldTitle));
			});

			await Promise.all(usersData.map(u => user.setUserField(u.uid, 'clubTitle', JSON.stringify(u.newTitleArray))));
		}, {});
	}

	async function renameclubsMember(keys, oldName, newName) {
		const isMembers = await db.isMemberOfSortedSets(keys, oldName);
		keys = keys.filter((key, index) => isMembers[index]);
		if (!keys.length) {
			return;
		}
		const scores = await db.sortedSetsScore(keys, oldName);
		await db.sortedSetsRemove(keys, oldName);
		await db.sortedSetsAdd(keys, scores, newName);
	}

	async function updateNavigationItems(oldName, newName) {
		const navigation = require('../navigation/admin');
		const navItems = await navigation.get();
		navItems.forEach((navItem) => {
			if (navItem && Array.isArray(navItem.clubs) && navItem.clubs.includes(oldName)) {
				navItem.clubs.splice(navItem.clubs.indexOf(oldName), 1, newName);
			}
		});
		navigation.unescapeFields(navItems);
		await navigation.save(navItems);
	}

	async function updateWidgets(oldName, newName) {
		const admin = require('../widgets/admin');
		const widgets = require('../widgets');

		const data = await admin.get();

		data.areas.forEach((area) => {
			area.widgets = area.data;
			area.widgets.forEach((widget) => {
				if (widget && widget.data && Array.isArray(widget.data.clubs) && widget.data.clubs.includes(oldName)) {
					widget.data.clubs.splice(widget.data.clubs.indexOf(oldName), 1, newName);
				}
			});
		});
		for (const area of data.areas) {
			if (area.data.length) {
				await widgets.setArea(area);
			}
		}
	}

	async function updateConfig(oldName, newName) {
		if (meta.config.clubsExemptFromPostQueue.includes(oldName)) {
			meta.config.clubsExemptFromPostQueue.splice(
				meta.config.clubsExemptFromPostQueue.indexOf(oldName), 1, newName
			);
			await meta.configs.set('clubsExemptFromPostQueue', meta.config.clubsExemptFromPostQueue);
		}
		if (meta.config.clubsExemptFromMaintenanceMode.includes(oldName)) {
			meta.config.clubsExemptFromMaintenanceMode.splice(
				meta.config.clubsExemptFromMaintenanceMode.indexOf(oldName), 1, newName
			);
			await meta.configs.set('clubsExemptFromMaintenanceMode', meta.config.clubsExemptFromMaintenanceMode);
		}
	}
};
