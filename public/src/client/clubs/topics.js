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
	alerts
) {
	const Details = {};
	let groupName;

	Details.init = function () {
		$("#buyBtn").on("click", Details.showDialogToBuy);
		$("#myModal").on("show.bs.modal", function () {
			// wire up the OK button to dismiss the modal when shown
			$("#myModal .modal-footer .btn").on("click", function (e) {
				console.log("button pressed");
				// $("#myModal").modal("hide");
			});
		});

		// $("#myModal").on("hide.bs.modal", function () {
		// 	// remove the event listeners when the dialog is dismissed
		// 	$("#myModal a.btn").off("click");
		// });

		// $("#myModal").on("hidden.bs.modal", function () {
		// 	// remove the actual elements from the DOM when fully hidden
		// 	$("#myModal").remove();
		// });
	};

	Details.showDialogToBuy = function (_e) {
		console.log("购买这个俱乐部");
		const token = "";
		const userId = "60020";
		const clubName = $('#buyBtn').data('name')
		// console.log('buy clubName', name)
		$.ajax(
			"https://www.search.club/userserver/xcloud-boss-provider-assets/assets/userWalletInfo/queryUserWalletInfo",
			{
				// dataType: "jsonp",
				type: "POST",
				headers: {
					authorization: `Bearer ${token}`,
				},
				data: {
					userId,
				},
				beforeSend: function () {},
				success: function (res) {
					console.log("queryWalletInfo", res);
					if (
						res.data &&
						res.data.data &&
						res.data.data.items &&
						res.data.data.items.length !== 0
					) {
						if (Number(res.data.data.items[0].avaliableBalance) > 100) {
							$(".modal-footer").empty();
							$(".modal-footer").append(
								'<button type="button" class="btn btn-primary" id="pay">Pay</button>'
							);
							$(".modal-footer").append(
								'<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>'
							);
							$(".content").empty();
							$(".content").append(
								'<div class="content-1">Own the club for <span class="sct">100</span> SCT</div>'
							);
						} else {
							$(".modal-footer").empty();
							$(".modal-footer").append(
								'<button type="button" class="btn btn-primary" id="goToSearch">Go to Search</button>'
							);
							$(".modal-footer").append(
								'<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>'
							);
							$(".content").empty();
							$(".content").append(
								'<div class="content-1">Your <span class="sct">SCT</span> is not enough</div>'
							);
							$(".content").append(
								'<div class="content-2">Get more <span class="sct">SCT</span> by searching</div>'
							);
						}
						$("#myModal").modal({
							backdrop: true,
							keyboard: true,
							show: true,
						});
					}
				},
				error: function (err) {
					console.log("queryWalletInfo", err);
					$(".modal-footer").empty();
					$(".modal-footer").append(
						'<button type="button" class="btn btn-primary" id="pay">Pay</button>'
					);
					$(".modal-footer").append(
						'<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>'
					);
					$(".content").empty();
					$(".content").append(
						'<div class="content-1">Own the club for <span class="sct">100</span> SCT</div>'
					);

					$("#pay").on("click", function () {
						console.log("buy club with 100 sct");
						$(".modal-footer").empty();
						$(".modal-footer").append(
							`<button type="button" class="btn btn-primary" id="pay">
								<i class="fas fa-spin fa-spinner"></i>
								Pay
							</button>`
						);
						$(".modal-footer").append(
							'<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>'
						);
						$.ajax(
							"https://www.search.club/userserver/xcloud-boss-provider-assets/assets/userWallet/buyPointCard",
							{
								type: "POST",
								headers: {
									authorization: `Bearer ${token}`,
								},
								data: {
									userId,
									clubName,
								},
								success: function (res) {
									console.log('buyPointCard', res)
									$("#myModal").modal("hide");
									alerts.success('buy successfully')
								},
								error: function (err) {
									console.log('buyPointCard', err)
									$("#myModal").modal("hide");
									alerts.error('pay failed')
								},
							}
						);
					});
					$("#myModal").modal({
						backdrop: true,
						keyboard: true,
						show: true,
					});
				},
			}
		);
	};

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
						.map((cid) => parseInt(cid, 10));
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

	return Details;
});
