'use strict';

define('forum/header', [
	'forum/header/unread',
	'forum/header/notifications',
	'forum/header/chat',
	'alerts',
], function (unread, notifications, chat, alerts) {
	const module = {};

	module.prepareDOM = function () {
		console.log('header prepare dom');
		if (app.user.uid > 0) {
			unread.initUnreadTopics();
		}
		notifications.prepareDOM();
		chat.prepareDOM();
		handleStatusChange();
		createHeaderTooltips();
		handleLogout();
		handleBase();
	};

	function handleStatusChange() {
		$('[component="header/usercontrol"] [data-status]').off('click').on('click', function (e) {
			const status = $(this).attr('data-status');
			socket.emit('user.setStatus', status, function (err) {
				if (err) {
					return alerts.error(err);
				}
				$('[data-uid="' + app.user.uid + '"] [component="user/status"], [component="header/profilelink"] [component="user/status"]')
					.removeClass('away online dnd offline')
					.addClass(status);
				$('[component="header/usercontrol"] [data-status]').each(function () {
					$(this).find('span').toggleClass('bold', $(this).attr('data-status') === status);
				});
				app.user.status = status;
			});
			e.preventDefault();
		});
	}

	function createHeaderTooltips() {
		const env = utils.findBootstrapEnvironment();
		if (env === 'xs' || env === 'sm' || utils.isTouchDevice()) {
			return;
		}
		$('#header-menu li a[title]').each(function () {
			$(this).tooltip({
				placement: 'bottom',
				trigger: 'hover',
				title: $(this).attr('title'),
			});
		});


		$('#search-form').tooltip({
			placement: 'bottom',
			trigger: 'hover',
			title: $('#search-button i').attr('title'),
		});


		$('#user_dropdown').tooltip({
			placement: 'bottom',
			trigger: 'hover',
			title: $('#user_dropdown').attr('title'),
		});
	}

	function handleLogout() {
		$('#header-menu .container').on('click', '[component="user/logout"]', function () {
			require(['logout'], function (logout) {
				require('js-cookie').remove('forumdata');
				require('js-cookie').remove('express.sid');
				require('js-cookie').remove('express.cacheid');
				logout();
			});
			return false;
		});
	}

	function handleBase() {
		console.log('window');
		$(window).on('action:ajaxify.start', function (e, data) {
			const currentUrl = data.url;
			console.log('ajaxify start:...== ', e.target.ajaxify, data.url);
			if (currentUrl.startsWith('clubs')) {
				$('#native-top-navbar').remove();
				$('#nav-dropdown').remove();
				$('#menu').remove();
				$('#chats-menu').remove();
				if (currentUrl.startsWith('clubs/')) {
					$('#clubs-home-navbar').hide();
					$('#clubs-detail-navbar').show();
				} else {
					$('#clubs-detail-navbar').hide();
					$('#clubs-home-navbar').show();
				}
				$('#custom-top-navbar').removeClass('hidden');
			} else {
				$('#custom-top-navbar').remove();
			}
			$('#container-header').removeClass('hidden');
		});
		$('#nav-menu-avatar').on('click', () => {
			location.href = 'https://www.search.club/me';
		});
	}

	return module;
});
