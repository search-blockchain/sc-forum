/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable no-tabs */

"use strict";

define("forum/clubs/details", [
	"forum/groups/memberlist",
	"iconSelect",
	"components",
	"coverPhoto",
	"pictureCropper",
	"translator",
	"api",
	"slugify",
	"categorySelector",
	"bootbox",
	"alerts",
	"utils",
	"forum/clubs/threadTools",
	'navigator',
	'topicList',
	'hooks',
	'sort',
	'forum/infinitescroll'
], function (
	memberList,
	iconSelect,
	components,
	coverPhoto,
	pictureCropper,
	translator,
	api,
	slugify,
	categorySelector,
	bootbox,
	alerts,
	utils,
	threadTools,
	navigator,
	topicList,
	hooks,
	sort,
	infinitescroll
) {
	const jsCookie = require('js-cookie');
	// let HOST_URL = window.location.origin;
	const origin = window.location.origin;
	const isDev = origin.indexOf('search.club') === -1;
	const API_URL = false ? 'http://192.168.1.107:7979' : 'https://www.search.club/userserver';
	const FORUM_URL = origin;
	let APP_URL = 'https://www.search.club';
	if (origin.indexOf('localhost') !== -1) {
		APP_URL = origin.replace('4567', '3030');
	}
	const Details = {};
	let groupName;
	let userWalletInfo = {};

	let token = "";
	const clubName = ajaxify.data.group.slug;
	let clubPrice = 0;
	let basicScore = 0;
	let userId = "";

	$(window).on('action:ajaxify.start', function (ev, data) {
		if (!String(data.url).startsWith('category/')) {
			navigator.disable();
		}
	});

	Details.init = function () {
		initSort();
		const detailsPage = components.get("clubs/container");

		$("#buyBtn").on("click", Details.showDialogToBuy);
		$("#myModal").on("show.bs.modal", function () {
			$("#myModal .modal-footer .btn").on("click", function () {
				console.log("button pressed");
				// $("#myModal").modal("hide");
			});
		});
		try {
			const rewardCookie = jsCookie.get(`minereward:${ajaxify.data.cid}`);
			let reward = 0;
			let numRW = 0;
			const search = location.search;
			if (ajaxify.data.loggedIn && rewardCookie && search && search.includes('?rw=')) {
				const rw = search.replace('?rw=', '');
				if (rw) {
					numRW = window.atob(decodeURIComponent(rw));
				}
				reward = window.atob(rewardCookie);
				console.log('lucky::: ', ajaxify.data.lucky, ajaxify.data.cid, rewardCookie, reward, numRW);
				const innerDomain = isDev ? 'localhost:3030' : 'search.club';
				if (reward > 0 && reward === numRW && document.referrer && document.referrer.includes(innerDomain)) {
					console.log('中奖', $("#myModal1"));
					$('#myModal1 .miner-reward').text(numRW);
					$("#myModal1").modal({
						backdrop: true,
						keyboard: true,
						show: true,
					});
					$("#myModal1").on("show.bs.modal", function () {
						$("#myModal1 .ok-btn").on("click", function (e) {
							console.log("button pressed");
						});
					});
					setTimeout(() => {
						jsCookie.remove(`minereward:${ajaxify.data.cid}`);
					}, [500]);
				}
			}
		} catch (e) {
			console.warn(e);
		}

		Details.getUserWalletInfo()
			.then((res) => {
				userWalletInfo = res;
			})
			.catch(() => {});

		Details.buyActiveCode()
			.then((res) => {
				clubPrice = res.amount;
				basicScore = res.basicScore;
				if ($(".club-price")) {
					$(".club-price").text(clubPrice);
				}
				if($(".basic-score")) {
					$(".basic-score").text(basicScore);
				}
			})
			.catch(() => {});

		// TODO 7需改为动态获取tid
		// clubs/threadTools.js中已有示例
		threadTools.init($(".page-clubs"));
		// $("#myModal").on("hide.bs.modal", function () {
		// 	// remove the event listeners when the dialog is dismissed
		// 	$("#myModal a.btn").off("click");
		// });

		// $("#myModal").on("hidden.bs.modal", function () {
		// 	// remove the actual elements from the DOM when fully hidden
		// 	$("#myModal").remove();
		// });

		detailsPage.on("click", "[data-action]", function () {
			const btnEl = $(this);
			const userRow = btnEl.parents("[data-uid]");
			const ownerFlagEl = userRow.find(".member-name > i");
			const isOwner = !ownerFlagEl.hasClass("invisible");
			const uid = userRow.attr("data-uid");
			const action = btnEl.attr("data-action");

			switch (action) {
				// case 'toggleOwnership':
				// 	api[isOwner ? 'del' : 'put'](`/groups/${ajaxify.data.group.slug}/ownership/${uid}`, {}).then(() => {
				// 		ownerFlagEl.toggleClass('invisible');
				// 	}).catch(alerts.error);
				// 	break;

				// case 'kick':
				// 	translator.translate('[[groups:details.kick_confirm]]', function (translated) {
				// 		bootbox.confirm(translated, function (confirm) {
				// 			if (!confirm) {
				// 				return;
				// 			}

				// 			api.del(`/groups/${ajaxify.data.group.slug}/membership/${uid}`, undefined).then(() => userRow.slideUp().remove()).catch(alerts.error);
				// 		});
				// 	});
				// 	break;

				// case 'update':
				// 	Details.update();
				// 	break;

				// case 'delete':
				// 	Details.deleteGroup();
				// 	break;

				case "join":
					api
						.put(
							"/groups/" +
								ajaxify.data.group.slug +
								"/membership/" +
								(uid || app.user.uid),
							undefined
						)
						.then(() => ajaxify.refresh())
						.catch(alerts.error);
					break;

				case "leave":
					api
						.del(
							"/groups/" +
								ajaxify.data.group.slug +
								"/membership/" +
								(uid || app.user.uid),
							undefined
						)
						.then(() => ajaxify.refresh())
						.catch(alerts.error);
					break;

				// TODO (14/10/2020): rewrite these to use api module and merge with above 2 case blocks
				// 	case 'accept': // intentional fall-throughs!
				// 	case 'reject':
				// 	case 'issueInvite':
				// 	case 'rescindInvite':
				// 	case 'acceptInvite':
				// 	case 'rejectInvite':
				// 	case 'acceptAll':
				// 	case 'rejectAll':
				// 		socket.emit('groups.' + action, {
				// 			toUid: uid,
				// 			groupName: groupName,
				// 		}, function (err) {
				// 			if (!err) {
				// 				ajaxify.refresh();
				// 			} else {
				// 				alerts.error(err);
				// 			}
				// 		});
				// 		break;
			}
		});
	};

	Details.getUserWalletInfo = function () {
		return new Promise(function (resolve, reject) {
			const objFromApp = utils.getCookie("forumdata");
			if (!objFromApp) {
				// alerts.error("未登录");
				return reject("无关联的appuser数据");
			}
			userId = objFromApp.userId;
			token = objFromApp.token;
			console.log('token', token)
			$.ajax(
				`${API_URL}/xcloud-boss-provider-assets/assets/userWalletInfo/queryUserWalletInfo`,
				{
					method: "POST",
					dataType: "json",
					contentType: "application/json;charset=UTF-8",
					headers: {
						// authorization: `Bearer ${token}`,
						"Content-Type": "application/json;charset=UTF-8",
						Accept: "application/json",
					},
					data: JSON.stringify({ userId }),
					beforeSend: function () {},
					success: function (res) {
						console.log("queryWalletInfo", res);
						if (res.data && +res.code === 200 && res.data.items) {
							if (res.data.items.length !== 0) {
								resolve(res.data.items[0]);
							} else {
								alerts.error("get avaliable balance failed");
								reject("get avaliable balance failed");
							}
						} else {
							alerts.error(res.message || "get avaliable balance failed");
							reject(res.message || "get avaliable balance failed");
						}
					},
					error: function (err) {
						console.log("queryWalletInfo", err);
						alerts.error("get avaliable balance failed");
						reject(err);
					},
				}
			);
		});
	};
	
	Details.buyActiveCode = function () {
		return new Promise(function (resolve, reject) {
			$.ajax({
				url: `${API_URL}/xcloud-boss-provider-assets/assets/userWallet/buyActiveCode`,
				method: "POST",
				dataType: "json",
				contentType: "application/json;charset=UTF-8",
				headers: {
					// authorization: `Bearer ${token}`,
					"Content-Type": "application/json;charset=UTF-8",
					Accept: "application/json",
				},
				data: JSON.stringify({
					clubName,
				}),
				success: function (res) {
					console.log("buyActiveCode", res);
					if (res.data && +res.code === 200) {
						resolve(res.data);
					} else {
						alerts.error(res.message || "get club price failed");
						reject(res.message || "get club price failed");
					}
				},
				error: function (err) {
					console.log("buyActiveCode", err);
					alerts.error("get club price failed");
					reject(err);
				},
			});
		});
	};

	Details.showDialogToBuy = function () {
		console.log("购买这个俱乐部", userWalletInfo, clubName, userId);
		if (!userId && !token) {
			window.location.href = `${APP_URL}/api/auth/signin?callbackUrl=${FORUM_URL}${config.relative_path}/clubs/${ajaxify.data.group.slug}`;
			return;
			// return alerts.error("未登录");
		}
		if (!userWalletInfo.avaliableBalance) return alerts.error("balance is 0");
		// if(!clubPrice) return alerts.error("获取不到俱乐部价格");
		if (clubPrice && Number(userWalletInfo.avaliableBalance) > clubPrice) {
			Details.buyActiveCode()
				.then((res) => {
					clubPrice = res.amount;
					$("#clubPrice").text(clubPrice);
				})
				.catch(() => {});
			$(".modal-footer").empty();
			$(".modal-footer").append(
				`<button type="button" class="btn btn-primary" id="pay">
					Pay ${clubPrice}
				</button>`
			);
			$(".modal-footer").append(
				'<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>'
			);
			$("#modalBodyContent").empty();
			$("#modalBodyContent").append(
				`<div class="content-1">
					Own the club for <span class="sct" id="clubPrice">${clubPrice}</span>
				</div>`
			);
			$("#pay").on("click", function () {
				console.log("buy club with sct");
				$(".modal-footer").empty();
				$(".modal-footer").append(
					`<button type="button" class="btn btn-primary" id="pay">
						<i class="fas fa-spin fa-spinner"></i>
						Pay ${clubPrice}
					</button>`
				);
				$(".modal-footer").append(
					'<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>'
				);
				$.ajax(
					`${API_URL}/xcloud-boss-provider-assets/assets/userWallet/buyPointCard`,
					{
						method: "POST",
						dataType: "json",
						contentType: "application/json;charset=UTF-8",
						headers: {
							// authorization: `Bearer ${token}`,
							"Content-Type": "application/json;charset=UTF-8",
							Accept: "application/json",
						},
						data: JSON.stringify({
							userId: userWalletInfo.userId,
							clubName,
						}),
						success: function (res) {
							console.log("buyPointCard", res);
							$("#myModal").modal("hide");
							if (res.data && +res.code === 200) {
								alerts.success("buy successfully");
								// window.location.href = `${APP_URL}/forum/clubs/${clubName}`;
								ajaxify.refresh();
							} else {
								alerts.error(res.message || "pay failed");
							}
						},
						error: function (err) {
							console.log("buyPointCard", err);
							$("#myModal").modal("hide");
							alerts.error("pay failed");
						},
					}
				);
			});
		} else {
			$(".modal-footer").empty();
			$(".modal-footer").append(
				'<button type="button" class="btn btn-primary" id="goToSearch">Go to earn</button>'
			);
			$(".modal-footer").append(
				'<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>'
			);
			$("#modalBodyContent").empty();
			// $("#modalBodyContent").append(
			// 	'<div class="content-1">Your <span class="sct">SCT</span> is not enough</div>'
			// );
			// $("#modalBodyContent").append(
			// 	'<div class="content-2">Get more <span class="sct">SCT</span> by searching</div>'
			// );
			$('#modalBodyContent').append(
				'<span>Coin in your account is insufficient,earn more by searching!</span>'
			);
			$("#goToSearch").on("click", function () {
				window.location.href = APP_URL;
			});
		}
		$("#myModal").modal({
			backdrop: true,
			keyboard: true,
			show: true,
		});
	};

	// ---------------- START /public/src/client/category.js ---------------
	function initSort() {
		const cid = ajaxify.data.cid;

		app.enterRoom('club_' + cid);

		// share.addShareHandlers(ajaxify.data.name);

		// topicList.init('club', loadTopicsAfter);

		sort.handleSort('clubTopicSort', 'clubs/' + clubName);
		const clubTopicSort = config.clubTopicSort;
		
		$('.sort-item')
			.removeClass('active')
			.parent()
			.children(`.${clubTopicSort}`)
			.addClass('active');

		if (!config.usePagination) {
			navigator.init('[component="category/topic"]', ajaxify.data.topic_count, Details.toTop, Details.toBottom, Details.navigatorCallback);
		} else {
			navigator.disable();
		}

		handleScrollToTopicIndex();

		// handleIgnoreWatch(cid);

		handleLoadMoreSubcategories();

		// categorySelector.init($('[component="category-selector"]'), {
		// 	privilege: 'find',
		// 	parentCid: ajaxify.data.cid,
		// 	onSelect: function (category) {
		// 		ajaxify.go('/category/' + category.cid);
		// 	},
		// });

		hooks.fire('action:topics.loaded', { topics: ajaxify.data.topics });
		hooks.fire('action:category.loaded', { cid: ajaxify.data.cid });
	}

	function handleScrollToTopicIndex() {
		let topicIndex = ajaxify.data.topicIndex;
		if (topicIndex && utils.isNumber(topicIndex)) {
			topicIndex = Math.max(0, parseInt(topicIndex, 10));
			if (topicIndex && window.location.search.indexOf('page=') === -1) {
				navigator.scrollToElement($('[component="category/topic"][data-index="' + topicIndex + '"]'), true, 0);
			}
		}
	}

	// function handleIgnoreWatch(cid) {
	// 	$('[component="category/watching"], [component="category/ignoring"], [component="category/notwatching"]').on('click', function () {
	// 		const $this = $(this);
	// 		const state = $this.attr('data-state');

	// 		socket.emit('categories.setWatchState', { cid: cid, state: state }, function (err) {
	// 			if (err) {
	// 				return alerts.error(err);
	// 			}

	// 			$('[component="category/watching/menu"]').toggleClass('hidden', state !== 'watching');
	// 			$('[component="category/watching/check"]').toggleClass('fa-check', state === 'watching');

	// 			$('[component="category/notwatching/menu"]').toggleClass('hidden', state !== 'notwatching');
	// 			$('[component="category/notwatching/check"]').toggleClass('fa-check', state === 'notwatching');

	// 			$('[component="category/ignoring/menu"]').toggleClass('hidden', state !== 'ignoring');
	// 			$('[component="category/ignoring/check"]').toggleClass('fa-check', state === 'ignoring');

	// 			alerts.success('[[category:' + state + '.message]]');
	// 		});
	// 	});
	// }

	function handleLoadMoreSubcategories() {
		$('[component="category/load-more-subcategories"]').on('click', function () {
			const btn = $(this);
			socket.emit('categories.loadMoreSubCategories', {
				cid: ajaxify.data.cid,
				start: ajaxify.data.nextSubCategoryStart,
			}, function (err, data) {
				if (err) {
					return alerts.error(err);
				}
				btn.toggleClass('hidden', !data.length || data.length < ajaxify.data.subCategoriesPerPage);
				if (!data.length) {
					return;
				}
				app.parseAndTranslate('category', 'children', { children: data }, function (html) {
					html.find('.timeago').timeago();
					$('[component="category/subcategory/container"]').append(html);
					utils.makeNumbersHumanReadable(html.find('.human-readable-number'));
					app.createUserTooltips(html);
					ajaxify.data.nextSubCategoryStart += ajaxify.data.subCategoriesPerPage;
					ajaxify.data.subCategoriesLeft -= data.length;
					btn.toggleClass('hidden', ajaxify.data.subCategoriesLeft <= 0)
						.translateText('[[category:x-more-categories, ' + ajaxify.data.subCategoriesLeft + ']]');
				});
			});
			return false;
		});
	}

	Details.toTop = function () {
		navigator.scrollTop(0);
	};

	Details.toBottom = function () {
		socket.emit('categories.getTopicCount', ajaxify.data.cid, function (err, count) {
			if (err) {
				return alerts.error(err);
			}

			navigator.scrollBottom(count - 1);
		});
	};

	Details.navigatorCallback = function (topIndex, bottomIndex) {
		return bottomIndex;
	};

	function loadTopicsAfter(after, direction, callback) {
		callback = callback || function () {};

		hooks.fire('action:topics.loading');
		const params = utils.params();
		infinitescroll.loadMore('categories.loadMore', {
			cid: ajaxify.data.cid,
			after: after,
			direction: direction,
			query: params,
			categoryTopicSort: config.categoryTopicSort,
		}, function (data, done) {
			hooks.fire('action:topics.loaded', { topics: data.topics });
			callback(data, done);
		});
	}
	// ---------------- END /public/src/client/category.js ---------------

	// ---------------- START /public/src/client/groups/details.js ---------------
	Details.prepareSettings = function () {
		const settingsFormEl = components.get("groups/settings");
		const labelColorValueEl = settingsFormEl.find('[name="labelColor"]');
		const textColorValueEl = settingsFormEl.find('[name="textColor"]');
		const iconBtn = settingsFormEl.find('[data-action="icon-select"]');
		const previewEl = settingsFormEl.find(".label");
		const previewElText = settingsFormEl.find(".label-text");
		const previewIcon = previewEl.find("i");
		const userTitleEl = settingsFormEl.find('[name="userTitle"]');
		const userTitleEnabledEl = settingsFormEl.find('[name="userTitleEnabled"]');
		const iconValueEl = settingsFormEl.find('[name="icon"]');

		labelColorValueEl.on("input", function () {
			previewEl.css("background-color", labelColorValueEl.val());
		});

		textColorValueEl.on("input", function () {
			previewEl.css("color", textColorValueEl.val());
		});

		// Add icon selection interface
		iconBtn.on("click", function () {
			iconSelect.init(previewIcon, function () {
				iconValueEl.val(previewIcon.val());
			});
		});

		// If the user title changes, update that too
		userTitleEl.on("keyup", function () {
			previewElText.translateText(
				this.value || settingsFormEl.find("#name").val()
			);
		});

		// Disable user title customisation options if the the user title itself is disabled
		userTitleEnabledEl.on("change", function () {
			const customOpts = components.get("groups/userTitleOption");

			if (this.checked) {
				customOpts.removeAttr("disabled");
				previewEl.removeClass("hide");
			} else {
				customOpts.attr("disabled", "disabled");
				previewEl.addClass("hide");
			}
		});

		const cidSelector = categorySelector.init(
			$('.member-post-cids-selector [component="category-selector"]'),
			{
				onSelect: function (selectedCategory) {
					let cids = ($("#memberPostCids").val() || "")
						.split(",")
						.map(cid => parseInt(cid, 10));
					cids.push(selectedCategory.cid);
					cids = cids.filter(
						(cid, index, array) => array.indexOf(cid) === index
					);
					$("#memberPostCids").val(cids.join(","));
					cidSelector.selectCategory(0);
				},
			}
		);
	};

	Details.update = function () {
		const settingsFormEl = components.get("groups/settings");
		const checkboxes = settingsFormEl.find('input[type="checkbox"][name]');

		if (settingsFormEl.length) {
			const settings = settingsFormEl.serializeObject();

			// serializeObject doesnt return array for multi selects if only one item is selected
			if (!Array.isArray(settings.memberPostCids)) {
				settings.memberPostCids = $("#memberPostCids").val();
			}

			// Fix checkbox values
			checkboxes.each(function (_idx, inputEl) {
				inputEl = $(inputEl);
				if (inputEl.length) {
					settings[inputEl.attr("name")] = inputEl.prop("checked");
				}
			});

			api
				.put(`/groups/${ajaxify.data.group.slug}`, settings)
				.then(() => {
					if (settings.name) {
						let pathname = window.location.pathname;
						pathname = pathname.slice(1, pathname.lastIndexOf("/") + 1);
						ajaxify.go(pathname + slugify(settings.name));
					} else {
						ajaxify.refresh();
					}

					alerts.success("[[groups:event.updated]]");
				})
				.catch(alerts.error);
		}
	};

	Details.deleteGroup = function () {
		bootbox.confirm(
			"Are you sure you want to delete the group: " +
				utils.escapeHTML(groupName),
			function (confirm) {
				if (confirm) {
					bootbox.prompt(
						"Please enter the name of this group in order to delete it:",
						function (response) {
							if (response === groupName) {
								api
									.del(`/groups/${ajaxify.data.group.slug}`, {})
									.then(() => {
										alerts.success(
											"[[groups:event.deleted, " +
												utils.escapeHTML(groupName) +
												"]]"
										);
										ajaxify.go("groups");
									})
									.catch(alerts.error);
							}
						}
					);
				}
			}
		);
	};

	function handleMemberInvitations() {
		if (!ajaxify.data.group.isOwner) {
			return;
		}

		const searchInput = $('[component="groups/members/invite"]');
		require(["autocomplete"], function (autocomplete) {
			autocomplete.user(searchInput, function (_event, selected) {
				socket.emit(
					"groups.issueInvite",
					{
						toUid: selected.item.user.uid,
						groupName: ajaxify.data.group.name,
					},
					function (err) {
						if (err) {
							return alerts.error(err);
						}
						ajaxify.refresh();
					}
				);
			});
		});

		$('[component="groups/members/bulk-invite-button"]').on(
			"click",
			function () {
				const usernames = $('[component="groups/members/bulk-invite"]').val();
				if (!usernames) {
					return false;
				}
				socket.emit(
					"groups.issueMassInvite",
					{
						usernames: usernames,
						groupName: ajaxify.data.group.name,
					},
					function (err) {
						if (err) {
							return alerts.error(err);
						}
						ajaxify.refresh();
					}
				);
				return false;
			}
		);
	}

	function removeCover() {
		translator.translate(
			"[[groups:remove_group_cover_confirm]]",
			function (translated) {
				bootbox.confirm(translated, function (confirm) {
					if (!confirm) {
						return;
					}

					socket.emit(
						"groups.cover.remove",
						{
							groupName: ajaxify.data.group.name,
						},
						function (err) {
							if (!err) {
								ajaxify.refresh();
							} else {
								alerts.error(err);
							}
						}
					);
				});
			}
		);
	}
	// ---------------- END /public/src/client/groups/details.js ---------------

	return Details;
});
