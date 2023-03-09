/* eslint-disable no-redeclare */

"use strict";

// const { atob } = require('buffer');
const $ = require("jquery");
const jsCookie = require("js-cookie");

const NodeBlob = require("buffer").Blob;

const utils = { ...require("./utils.common") };

utils.getLanguage = function () {
	let lang = "en-GB";
	if (typeof window === "object" && window.config && window.utils) {
		lang =
			utils.params().lang || config.userLang || config.defaultLang || "en-GB";
	}
	return lang;
};

utils.makeNumbersHumanReadable = function (elements) {
	elements.each(function () {
		$(this)
			.html(utils.makeNumberHumanReadable($(this).attr("title")))
			.removeClass("hidden");
	});
};

utils.addCommasToNumbers = function (elements) {
	elements.each(function (index, element) {
		$(element)
			.html(utils.addCommas($(element).html()))
			.removeClass("hidden");
	});
};

utils.findBootstrapEnvironment = function () {
	// http://stackoverflow.com/questions/14441456/how-to-detect-which-device-view-youre-on-using-twitter-bootstrap-api
	const envs = ["xs", "sm", "md", "lg"];
	const $el = $("<div>");

	$el.appendTo($("body"));

	for (let i = envs.length - 1; i >= 0; i -= 1) {
		const env = envs[i];

		$el.addClass("hidden-" + env);
		if ($el.is(":hidden")) {
			$el.remove();
			return env;
		}
	}
};

utils.isMobile = function () {
	const env = utils.findBootstrapEnvironment();
	return ["xs", "sm"].some(function (targetEnv) {
		return targetEnv === env;
	});
};

utils.assertPasswordValidity = (password, zxcvbn) => {
	// More checks on top of basic utils.isPasswordValid()
	if (!utils.isPasswordValid(password)) {
		throw new Error("[[user:change_password_error]]");
	} else if (password.length < ajaxify.data.minimumPasswordLength) {
		throw new Error("[[reset_password:password_too_short]]");
	} else if (password.length > 512) {
		throw new Error("[[error:password-too-long]]");
	}

	const passwordStrength = zxcvbn(password);
	if (passwordStrength.score < ajaxify.data.minimumPasswordStrength) {
		throw new Error("[[user:weak_password]]");
	}
};

utils.generateUUID = function () {
	// from https://github.com/tracker1/node-uuid4/blob/master/browser.js
	const temp_url = URL.createObjectURL(Blob ? new Blob() : new NodeBlob());
	const uuid = temp_url.toString();
	URL.revokeObjectURL(temp_url);
	return uuid.split(/[:/]/g).pop().toLowerCase(); // remove prefixes
};

utils.getCookie = function (key) {
	// console.log("before getting::::", jsCookie);
	try {
		const forumCookieFromApp = jsCookie.get(key);
		if (!forumCookieFromApp) {
			return;
		}
		console.log("forumCookieFromApp", forumCookieFromApp, window.atob);
		const de64 = window.atob(forumCookieFromApp).toString();
		console.log("de64", de64);
		const objFromApp = JSON.parse(de64 || "{}");
		console.log("after getting");
		console.log("decode: ", objFromApp);
		return objFromApp;
	} catch (e) {
		console.log(e);
		return;
	}
};

utils.getUserWalletInfo = function () {
	return new Promise(function (resolve, reject) {
		const objFromApp = utils.getCookie("forumdata");
		if (!objFromApp || !objFromApp?.userId) {
			return reject("no user found");
		}
		const API_URL = "https://www.search.club/userserver";
		const userId = objFromApp?.userId;
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
					console.log("queryWalletInfo: ", res);
					if (res.data && +res.code === 200 && res.data.items) {
						if (res.data.items.length !== 0) {
							resolve(res.data.items[0]);
						} else {
							reject("get avaliable balance failed");
						}
					} else {
						reject(res.message || "get avaliable balance failed");
					}
				},
				error: function (err) {
					console.log("queryWalletInfo error: ", err);
					reject(err);
				},
			}
		);
	});
};

module.exports = utils;
