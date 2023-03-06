'use strict';

define('forum/clubs/list', [
	'forum/infinitescroll', 'benchpress', 'api', 'bootbox', 'alerts',
], function (infinitescroll, Benchpress, api, bootbox, alerts) {
	const Clubs = {};
	const defaultSort = 'count';

	Clubs.init = function () {
		infinitescroll.init(Clubs.loadMoreClubs);
		$('#tab1').on('click', function () {
			console.log('tab1');
			window.location.href = 'https://www.search.club/';
		});
		$('#tab2').on('click', function () {
			window.location.href = 'https://www.search.club/me';
		});

		// Club creation
		$('button[data-action="new"]').on('click', function () {
			bootbox.prompt('[[groups:new-group.group_name]]', function (name) {
				if (name && name.length) {
					api.post('/groups', {
						name: name,
					}).then((res) => {
						ajaxify.go('clubs/' + res.slug);
					}).catch(alerts.error);
				}
			});
		});
		// const params = utils.params();
		// $('#search-sort').val(params.sort || 'alpha');

		// Club searching
		$('#search-text').on('keyup', Clubs.search);
		$('#search-button').on('click', Clubs.search);
		// $('#search-sort').on('change', function () {
		// ajaxify.go('clubs?sort=' + $('#search-sort').val());
		// });
	};

	Clubs.loadMoreClubs = function (direction) {
		if (direction < 0) {
			return;
		}

		infinitescroll.loadMore('clubs.loadMore', {
			// sort: $('#search-sort').val(),
			sort: defaultSort,
			after: $('[component="clubs/container"]').attr('data-nextstart'),
		}, function (data, done) {
			if (data && data.groups.length) {
				Benchpress.render('partials/clubs/list', {
					groups: data.groups,
				}).then(function (html) {
					$('#groups-list').append(html);
					done();
				});
			} else {
				done();
			}

			if (data && data.nextStart) {
				$('[component="clubs/container"]').attr('data-nextstart', data.nextStart);
			}
		});
	};

	Clubs.search = function () {
		const groupsEl = $('#groups-list');
		const queryEl = $('#search-text');
		// const sortEl = $('#search-sort');

		socket.emit('groups.search', {
			query: queryEl.val(),
			options: {
				// sort: sortEl.val(),
				sort: defaultSort,
				filterHidden: true,
				showMembers: true,
				hideEphemeralClubs: true,
			},
		}, function (err, groups) {
			if (err) {
				return alerts.error(err);
			}
			groups = groups.filter(function (group) {
				return group.name !== 'registered-users' && group.name !== 'guests';
			});
			Benchpress.render('partials/clubs/list', {
				groups: groups,
			}).then(function (html) {
				groupsEl.empty().append(html);
			});
		});
		return false;
	};

	return Clubs;
});
