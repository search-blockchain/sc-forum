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
	"navigator",
	"topicList",
	"hooks",
	"sort",
	"forum/infinitescroll",
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
	infinitescroll,
) {
	const jsCookie = require("js-cookie");
	// let HOST_URL = window.location.origin;
	const origin = window.location.origin;
	const isDev = origin.indexOf("search.club") === -1;
	const API_URL = false
		? "http://192.168.1.107:7979"
		: "https://www.search.club/userserver";
	const FORUM_URL = origin;
	let APP_URL = "https://www.search.club";
	if (origin.indexOf("localhost") !== -1) {
		APP_URL = origin.replace("4567", "3030");
	}
	const Details = {};
	let groupName;
	let userWalletInfo = {};

	let token = "";
	let clubName = "";
	let clubPrice = 0;
	let basicScore = 0;
	let userId = "";

	$(window).on("action:ajaxify.start", function (ev, data) {
		if (!String(data.url).startsWith("category/")) {
			navigator.disable();
		}
	});

	Details.init = function () {
		clubName = ajaxify.data.group.slug;
		initSort();
		// const detailsPage = components.get("clubs/container");
		const headerComp = components.get('navbar');
		console.log('----- topics page ---->>: ', ajaxify.data);
		setHeader(ajaxify.data.group);
		$("#cancel-svg").on("click", function () {
			window.location.href = "https://www.search.club/forum/clubs";
		});

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
			if (
				ajaxify.data.loggedIn &&
				rewardCookie &&
				search &&
				search.includes("?rw=")
			) {
				const rw = search.replace("?rw=", "");
				if (rw) {
					numRW = window.atob(decodeURIComponent(rw));
				}
				reward = window.atob(rewardCookie);
				console.log(
					"lucky::: ",
					ajaxify.data.lucky,
					ajaxify.data.cid,
					rewardCookie,
					reward,
					numRW
				);
				const innerDomain = isDev ? "localhost:3030" : "search.club";
				if (
					reward > 0 &&
					reward === numRW &&
					document.referrer &&
					document.referrer.includes(innerDomain)
				) {
					console.log("中奖", $("#myModal1"));
					$("#myModal1 .miner-reward").text(numRW);
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
				if ($(".basic-score")) {
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

		headerComp.on("click", "[data-action]", function () {
			const btnEl = $(this);
			const uid = ajaxify.data.currentUID;
			const action = btnEl.attr("data-action");
			console.log('click==: ', btnEl, uid, action, ajaxify.data);
			console.log('是否登录: ', uid);
			// if (!uid) {
			// 	location.href = '';
			// 	return;
			// }
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
							"/clubs/" +
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
							"/clubs/" +
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
			console.log("token", token);
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
		// if (!userWalletInfo.avaliableBalance) return alerts.error("balance is 0");
		// if(!clubPrice) return alerts.error("获取不到俱乐部价格");
		if (clubPrice && Number(userWalletInfo.avaliableBalance) >= clubPrice) {
			Details.buyActiveCode()
				.then((res) => {
					clubPrice = res.amount;
					$("#clubPrice").text(clubPrice);
				})
				.catch(() => {});
			$(".modal-header").css({ borderBottom: '0px solid #dfdfdf' });
			$(".modal-footer").empty();
			$(".modal-footer").append(
				`<button type="button" class="btn btn-primary" id="pay">
					Pay ${clubPrice}&nbsp;
					<svg style="box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);border-radius: 500%;" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M21.4617 10.75C21.4617 16.6657 16.6657 21.4617 10.75 21.4617C4.83432 21.4617 0.0383436 16.6657 0.0383436 10.75C0.0383436 4.83432 4.83432 0.0383436 10.75 0.0383436C16.6657 0.0383436 21.4617 4.83432 21.4617 10.75Z" fill="url(#paint0_linear_3043_864)" stroke="url(#paint1_linear_3043_864)" stroke-width="0.0766871"/>
						<path d="M10.0295 4.8291V5.48832L9.87109 5.48831L9.87018 5.48832C8.19864 5.49827 6.8642 6.84217 6.8642 8.50466C6.8642 10.1668 8.20777 11.5205 9.87018 11.5304H9.87109H10.0295V11.5493H10.1829H11.723H11.8764V11.5304H12.016C12.6093 11.5304 13.1004 12.0359 13.1004 12.6243C13.1004 13.2112 12.6384 13.6823 12.0692 13.7087H11.8764V13.6615H11.723H10.1829H10.0295V13.7087H7.51836H7.36499V13.8621V15.5062V15.6595H7.51836H10.0295V16.3093V16.4627H10.1829H11.723H11.8764V16.3093V15.6501L12.0443 15.6501L12.0452 15.6501C13.6988 15.6401 15.0323 14.2858 15.0323 12.6337C15.0323 11.1223 13.9573 9.88689 12.5231 9.64784L12.5105 9.64576H12.4978H10.2679C10.1721 9.64576 10.0845 9.63689 10.0097 9.61443L9.98809 9.60796H9.96558H9.84608C9.25742 9.58149 8.79613 9.10976 8.79613 8.5141C8.79613 7.9185 9.28494 7.4297 9.88054 7.4297H10.0201V7.53363H10.1735H10.1736H10.1738H10.174H10.1741H10.1743H10.1745H10.1746H10.1748H10.175H10.1752H10.1753H10.1755H10.1757H10.1759H10.176H10.1762H10.1764H10.1766H10.1768H10.1769H10.1771H10.1773H10.1775H10.1777H10.1779H10.178H10.1782H10.1784H10.1786H10.1788H10.179H10.1792H10.1794H10.1796H10.1798H10.18H10.1802H10.1803H10.1805H10.1807H10.1809H10.1811H10.1813H10.1815H10.1817H10.1819H10.1821H10.1823H10.1825H10.1827H10.1829H10.1831H10.1834H10.1836H10.1838H10.184H10.1842H10.1844H10.1846H10.1848H10.185H10.1852H10.1854H10.1857H10.1859H10.1861H10.1863H10.1865H10.1867H10.1869H10.1871H10.1874H10.1876H10.1878H10.188H10.1882H10.1885H10.1887H10.1889H10.1891H10.1893H10.1896H10.1898H10.19H10.1902H10.1904H10.1907H10.1909H10.1911H10.1913H10.1916H10.1918H10.192H10.1922H10.1925H10.1927H10.1929H10.1932H10.1934H10.1936H10.1938H10.1941H10.1943H10.1945H10.1948H10.195H10.1952H10.1955H10.1957H10.1959H10.1962H10.1964H10.1966H10.1969H10.1971H10.1973H10.1976H10.1978H10.198H10.1983H10.1985H10.1987H10.199H10.1992H10.1995H10.1997H10.1999H10.2002H10.2004H10.2007H10.2009H10.2011H10.2014H10.2016H10.2019H10.2021H10.2023H10.2026H10.2028H10.2031H10.2033H10.2035H10.2038H10.204H10.2043H10.2045H10.2048H10.205H10.2052H10.2055H10.2057H10.206H10.2062H10.2065H10.2067H10.2069H10.2072H10.2074H10.2077H10.2079H10.2082H10.2084H10.2087H10.2089H10.2092H10.2094H10.2096H10.2099H10.2101H10.2104H10.2106H10.2109H10.2111H10.2114H10.2116H10.2119H10.2121H10.2124H10.2126H10.2128H10.2131H10.2133H10.2136H10.2138H10.2141H10.2143H10.2146H10.2148H10.2151H10.2153H10.2156H10.2158H10.2161H10.2163H10.2165H10.2168H10.217H10.2173H10.2175H10.2178H10.218H10.2183H10.2185H10.2188H10.219H10.2193H10.2195H10.2197H10.22H10.2202H10.2205H10.2207H10.221H10.2212H10.2215H10.2217H10.2219H10.2222H10.2224H10.2227H10.2229H10.2232H10.2234H10.2237H10.2239H10.2241H10.2244H10.2246H10.2249H10.2251H10.2254H10.2256H10.2258H10.2261H10.2263H10.2266H10.2268H10.227H10.2273H10.2275H10.2278H10.228H10.2282H10.2285H10.2287H10.229H10.2292H10.2294H10.2297H10.2299H10.2301H10.2304H10.2306H10.2309H10.2311H10.2313H10.2316H10.2318H10.232H10.2323H10.2325H10.2327H10.233H10.2332H10.2334H10.2337H10.2339H10.2341H10.2344H10.2346H10.2348H10.235H10.2353H10.2355H10.2357H10.236H10.2362H10.2364H10.2366H10.2369H10.2371H10.2373H10.2375H10.2378H10.238H10.2382H10.2384H10.2387H10.2389H10.2391H10.2393H10.2396H10.2398H10.24H10.2402H10.2404H10.2406H10.2409H10.2411H10.2413H10.2415H10.2417H10.2419H10.2422H10.2424H10.2426H10.2428H10.243H10.2432H10.2434H10.2436H10.2439H10.2441H10.2443H10.2445H10.2447H10.2449H10.2451H10.2453H10.2455H10.2457H10.2459H10.2461H10.2463H10.2465H10.2467H10.2469H10.2471H10.2473H10.2475H10.2477H10.2479H10.2481H10.2483H10.2485H10.2487H10.2489H10.2491H10.2493H10.2495H10.2497H10.2499H10.2501H10.2502H10.2504H10.2506H10.2508H10.251H10.2512H10.2514H10.2516H10.2517H10.2519H10.2521H10.2523H10.2525H10.2526H10.2528H10.253H10.2532H10.2533H10.2535H10.2537H10.2539H10.254H10.2542H10.2544H10.2546H10.2547H10.2549H10.2551H10.2552H10.2554H10.2556H10.2557H10.2559H10.2561H10.2562H10.2564H10.2565H10.2567H10.2568H10.257H10.2572H10.2573H10.2575H10.2576H10.2578H10.2579H10.2581H10.2582H10.2584H10.2585H10.2587H10.2588H10.259H10.2591H10.2593H10.2594H10.2595H10.2597H10.2598H10.2599H10.2601H10.2602H10.2604H10.2605H10.2606H10.2608H10.2609H10.261H10.2611H10.2613H10.2614H10.2615H10.2616H10.2618H10.2619H10.262H10.2621H10.2623H10.2624H10.2625H10.2626H10.2627H10.2628H10.2629H10.2631H10.2632H10.2633H10.2634H10.2635H10.2636H10.2637H10.2638H10.2639H10.264H10.2641H10.2642H10.2643H10.2644H10.2645H10.2646H10.2647H10.2648H10.2649H10.265H10.265H10.2651H10.2652H10.2653H10.2654H10.2655H10.2655H10.2656H10.2657H10.2658H10.2659H10.2659H10.266H10.2661H10.2661H10.2662H10.2663H10.2663H10.2664H10.2665H10.2665H10.2666H10.2667H10.2667H10.2668H10.2668H10.2669H10.2669H10.267H10.267H10.2671H10.2671H10.2672H10.2672H10.2673H10.2673H10.2674H10.2674H10.2674H10.2675H10.2675H10.2675H10.2676H10.2676H10.2676H10.2677H10.2677H10.2677H10.2677H10.2678H10.2678H10.2678H10.2678H10.2678H10.2679H10.2679H10.2679H10.2679H10.2679H10.2679H10.2679H10.2679H10.2679H10.2679H11.7136H11.867V7.4297H13.6128H13.7662V7.27632V5.65114V5.49777H13.6128H11.867V4.90208L12.0933 4.67573H11.723H10.1829H10.0295V4.8291Z" fill="#F5F5F5" stroke="#F5F5F5" stroke-width="0.306748"/>
						<defs>
						<linearGradient id="paint0_linear_3043_864" x1="10.75" y1="0" x2="10.75" y2="21.5" gradientUnits="userSpaceOnUse">
						<stop stop-color="#E26308"/>
						<stop offset="1" stop-color="#F19411"/>
						</linearGradient>
						<linearGradient id="paint1_linear_3043_864" x1="10.75" y1="0" x2="10.75" y2="21.5" gradientUnits="userSpaceOnUse">
						<stop stop-color="#E16208"/>
						<stop offset="1" stop-color="#F19411"/>
						</linearGradient>
						</defs>
					</svg>
				</button>`
			);
			// $(".modal-footer").append(
			// 	`<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>`
			// );
			$("#modalBodyContent").empty();
			$("#modalBodyContent").append(`
				<div class="content-0">
					Club value = ${basicScore} + num(posts) + num(members)
				</div>
			`);
			$("#modalBodyContent").append(
				`<div class="content-1">
					Own the club for 
					<span class="sct" id="clubPrice">${clubPrice}</span>
					<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M21.4617 10.75C21.4617 16.6657 16.6657 21.4617 10.75 21.4617C4.83432 21.4617 0.0383436 16.6657 0.0383436 10.75C0.0383436 4.83432 4.83432 0.0383436 10.75 0.0383436C16.6657 0.0383436 21.4617 4.83432 21.4617 10.75Z" fill="url(#paint0_linear_2856_1848)" stroke="url(#paint1_linear_2856_1848)" stroke-width="0.0766871"/>
						<path d="M10.0295 4.8291V5.48832L9.87109 5.48831L9.87018 5.48832C8.19864 5.49827 6.8642 6.84217 6.8642 8.50466C6.8642 10.1668 8.20777 11.5205 9.87018 11.5304H9.87109H10.0295V11.5493H10.1829H11.723H11.8764V11.5304H12.016C12.6093 11.5304 13.1004 12.0359 13.1004 12.6243C13.1004 13.2112 12.6384 13.6823 12.0692 13.7087H11.8764V13.6615H11.723H10.1829H10.0295V13.7087H7.51836H7.36499V13.8621V15.5062V15.6595H7.51836H10.0295V16.3093V16.4627H10.1829H11.723H11.8764V16.3093V15.6501L12.0443 15.6501L12.0452 15.6501C13.6988 15.6401 15.0323 14.2858 15.0323 12.6337C15.0323 11.1223 13.9573 9.88689 12.5231 9.64784L12.5105 9.64576H12.4978H10.2679C10.1721 9.64576 10.0845 9.63689 10.0097 9.61443L9.98809 9.60796H9.96558H9.84608C9.25742 9.58149 8.79613 9.10976 8.79613 8.5141C8.79613 7.9185 9.28494 7.4297 9.88054 7.4297H10.0201V7.53363H10.1735H10.1736H10.1738H10.174H10.1741H10.1743H10.1745H10.1746H10.1748H10.175H10.1752H10.1753H10.1755H10.1757H10.1759H10.176H10.1762H10.1764H10.1766H10.1768H10.1769H10.1771H10.1773H10.1775H10.1777H10.1779H10.178H10.1782H10.1784H10.1786H10.1788H10.179H10.1792H10.1794H10.1796H10.1798H10.18H10.1802H10.1803H10.1805H10.1807H10.1809H10.1811H10.1813H10.1815H10.1817H10.1819H10.1821H10.1823H10.1825H10.1827H10.1829H10.1831H10.1834H10.1836H10.1838H10.184H10.1842H10.1844H10.1846H10.1848H10.185H10.1852H10.1854H10.1857H10.1859H10.1861H10.1863H10.1865H10.1867H10.1869H10.1871H10.1874H10.1876H10.1878H10.188H10.1882H10.1885H10.1887H10.1889H10.1891H10.1893H10.1896H10.1898H10.19H10.1902H10.1904H10.1907H10.1909H10.1911H10.1913H10.1916H10.1918H10.192H10.1922H10.1925H10.1927H10.1929H10.1932H10.1934H10.1936H10.1938H10.1941H10.1943H10.1945H10.1948H10.195H10.1952H10.1955H10.1957H10.1959H10.1962H10.1964H10.1966H10.1969H10.1971H10.1973H10.1976H10.1978H10.198H10.1983H10.1985H10.1987H10.199H10.1992H10.1995H10.1997H10.1999H10.2002H10.2004H10.2007H10.2009H10.2011H10.2014H10.2016H10.2019H10.2021H10.2023H10.2026H10.2028H10.2031H10.2033H10.2035H10.2038H10.204H10.2043H10.2045H10.2048H10.205H10.2052H10.2055H10.2057H10.206H10.2062H10.2065H10.2067H10.2069H10.2072H10.2074H10.2077H10.2079H10.2082H10.2084H10.2087H10.2089H10.2092H10.2094H10.2096H10.2099H10.2101H10.2104H10.2106H10.2109H10.2111H10.2114H10.2116H10.2119H10.2121H10.2124H10.2126H10.2128H10.2131H10.2133H10.2136H10.2138H10.2141H10.2143H10.2146H10.2148H10.2151H10.2153H10.2156H10.2158H10.2161H10.2163H10.2165H10.2168H10.217H10.2173H10.2175H10.2178H10.218H10.2183H10.2185H10.2188H10.219H10.2193H10.2195H10.2197H10.22H10.2202H10.2205H10.2207H10.221H10.2212H10.2215H10.2217H10.2219H10.2222H10.2224H10.2227H10.2229H10.2232H10.2234H10.2237H10.2239H10.2241H10.2244H10.2246H10.2249H10.2251H10.2254H10.2256H10.2258H10.2261H10.2263H10.2266H10.2268H10.227H10.2273H10.2275H10.2278H10.228H10.2282H10.2285H10.2287H10.229H10.2292H10.2294H10.2297H10.2299H10.2301H10.2304H10.2306H10.2309H10.2311H10.2313H10.2316H10.2318H10.232H10.2323H10.2325H10.2327H10.233H10.2332H10.2334H10.2337H10.2339H10.2341H10.2344H10.2346H10.2348H10.235H10.2353H10.2355H10.2357H10.236H10.2362H10.2364H10.2366H10.2369H10.2371H10.2373H10.2375H10.2378H10.238H10.2382H10.2384H10.2387H10.2389H10.2391H10.2393H10.2396H10.2398H10.24H10.2402H10.2404H10.2406H10.2409H10.2411H10.2413H10.2415H10.2417H10.2419H10.2422H10.2424H10.2426H10.2428H10.243H10.2432H10.2434H10.2436H10.2439H10.2441H10.2443H10.2445H10.2447H10.2449H10.2451H10.2453H10.2455H10.2457H10.2459H10.2461H10.2463H10.2465H10.2467H10.2469H10.2471H10.2473H10.2475H10.2477H10.2479H10.2481H10.2483H10.2485H10.2487H10.2489H10.2491H10.2493H10.2495H10.2497H10.2499H10.2501H10.2502H10.2504H10.2506H10.2508H10.251H10.2512H10.2514H10.2516H10.2517H10.2519H10.2521H10.2523H10.2525H10.2526H10.2528H10.253H10.2532H10.2533H10.2535H10.2537H10.2539H10.254H10.2542H10.2544H10.2546H10.2547H10.2549H10.2551H10.2552H10.2554H10.2556H10.2557H10.2559H10.2561H10.2562H10.2564H10.2565H10.2567H10.2568H10.257H10.2572H10.2573H10.2575H10.2576H10.2578H10.2579H10.2581H10.2582H10.2584H10.2585H10.2587H10.2588H10.259H10.2591H10.2593H10.2594H10.2595H10.2597H10.2598H10.2599H10.2601H10.2602H10.2604H10.2605H10.2606H10.2608H10.2609H10.261H10.2611H10.2613H10.2614H10.2615H10.2616H10.2618H10.2619H10.262H10.2621H10.2623H10.2624H10.2625H10.2626H10.2627H10.2628H10.2629H10.2631H10.2632H10.2633H10.2634H10.2635H10.2636H10.2637H10.2638H10.2639H10.264H10.2641H10.2642H10.2643H10.2644H10.2645H10.2646H10.2647H10.2648H10.2649H10.265H10.265H10.2651H10.2652H10.2653H10.2654H10.2655H10.2655H10.2656H10.2657H10.2658H10.2659H10.2659H10.266H10.2661H10.2661H10.2662H10.2663H10.2663H10.2664H10.2665H10.2665H10.2666H10.2667H10.2667H10.2668H10.2668H10.2669H10.2669H10.267H10.267H10.2671H10.2671H10.2672H10.2672H10.2673H10.2673H10.2674H10.2674H10.2674H10.2675H10.2675H10.2675H10.2676H10.2676H10.2676H10.2677H10.2677H10.2677H10.2677H10.2678H10.2678H10.2678H10.2678H10.2678H10.2679H10.2679H10.2679H10.2679H10.2679H10.2679H10.2679H10.2679H10.2679H10.2679H11.7136H11.867V7.4297H13.6128H13.7662V7.27632V5.65114V5.49777H13.6128H11.867V4.90208L12.0933 4.67573H11.723H10.1829H10.0295V4.8291Z" fill="#F5F5F5" stroke="#F5F5F5" stroke-width="0.306748"/>
						<defs>
						<linearGradient id="paint0_linear_2856_1848" x1="10.75" y1="0" x2="10.75" y2="21.5" gradientUnits="userSpaceOnUse">
						<stop stop-color="#E26308"/>
						<stop offset="1" stop-color="#F19411"/>
						</linearGradient>
						<linearGradient id="paint1_linear_2856_1848" x1="10.75" y1="0" x2="10.75" y2="21.5" gradientUnits="userSpaceOnUse">
						<stop stop-color="#E16208"/>
						<stop offset="1" stop-color="#F19411"/>
						</linearGradient>
						</defs>
					</svg>
				</div>`
			);
			$("#pay").on("click", function () {
				console.log("buy club with sct");
				$(".modal-footer").empty();
				$(".modal-footer").append(
					`<button type="button" class="btn btn-primary" id="pay">
						<i class="fas fa-spin fa-spinner"></i>
					</button>`
				);
				// $(".modal-footer").append(
				// 	'<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>'
				// );
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
							$(this).attr("data-dismiss","modal");
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
							$(this).attr("data-dismiss","modal");
							$("#myModal").modal("hide");
							alerts.error("pay failed");
						},
					}
				);
			});
		} else {
			$(".modal-header").css({ borderBottom: '1px solid #dfdfdf' });
			$(".modal-footer").empty();
			$(".modal-footer").append(
				`<button type="button" class="btn btn-primary" id="goToSearch">Go to earn</button>`
			);
			// $(".modal-footer").append(
			// 	`<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>`
			// );
			$("#modalBodyContent").empty();
			// $("#modalBodyContent").append(
			// 	'<div class="content-1">Your <span class="sct">SCT</span> is not enough</div>'
			// );
			// $("#modalBodyContent").append(
			// 	'<div class="content-2">Get more <span class="sct">SCT</span> by searching</div>'
			// );
			$("#modalBodyContent").append(
				`<span class="tip-text">Coin in your account is insufficient, earn more by searching!</span>`
			);
			$("#goToSearch").on("click", function () {
				$(this).attr("data-dismiss","modal");
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

		app.enterRoom("club_" + cid);

		// share.addShareHandlers(ajaxify.data.name);

		// topicList.init('club', loadTopicsAfter);

		sort.handleSort("clubTopicSort", "clubs/" + clubName);
		const clubTopicSort = config.clubTopicSort;

		$(".sort-item")
			.removeClass("active")
			.parent()
			.children(`.${clubTopicSort}`)
			.addClass("active");

		if (!config.usePagination) {
			navigator.init(
				'[component="category/topic"]',
				ajaxify.data.topic_count,
				Details.toTop,
				Details.toBottom,
				Details.navigatorCallback
			);
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

		hooks.fire("action:topics.loaded", { topics: ajaxify.data.topics });
		hooks.fire("action:category.loaded", { cid: ajaxify.data.cid });
	}

	function handleScrollToTopicIndex() {
		let topicIndex = ajaxify.data.topicIndex;
		if (topicIndex && utils.isNumber(topicIndex)) {
			topicIndex = Math.max(0, parseInt(topicIndex, 10));
			if (topicIndex && window.location.search.indexOf("page=") === -1) {
				navigator.scrollToElement(
					$('[component="category/topic"][data-index="' + topicIndex + '"]'),
					true,
					0
				);
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
		$('[component="category/load-more-subcategories"]').on(
			"click",
			function () {
				const btn = $(this);
				socket.emit(
					"categories.loadMoreSubCategories",
					{
						cid: ajaxify.data.cid,
						start: ajaxify.data.nextSubCategoryStart,
					},
					function (err, data) {
						if (err) {
							return alerts.error(err);
						}
						btn.toggleClass(
							"hidden",
							!data.length || data.length < ajaxify.data.subCategoriesPerPage
						);
						if (!data.length) {
							return;
						}
						app.parseAndTranslate(
							"category",
							"children",
							{ children: data },
							function (html) {
								html.find(".timeago").timeago();
								$('[component="category/subcategory/container"]').append(html);
								utils.makeNumbersHumanReadable(
									html.find(".human-readable-number")
								);
								app.createUserTooltips(html);
								ajaxify.data.nextSubCategoryStart +=
									ajaxify.data.subCategoriesPerPage;
								ajaxify.data.subCategoriesLeft -= data.length;
								btn
									.toggleClass("hidden", ajaxify.data.subCategoriesLeft <= 0)
									.translateText(
										"[[category:x-more-categories, " +
											ajaxify.data.subCategoriesLeft +
											"]]"
									);
							}
						);
					}
				);
				return false;
			}
		);
	}

	Details.toTop = function () {
		navigator.scrollTop(0);
	};

	Details.toBottom = function () {
		socket.emit(
			"categories.getTopicCount",
			ajaxify.data.cid,
			function (err, count) {
				if (err) {
					return alerts.error(err);
				}

				navigator.scrollBottom(count - 1);
			}
		);
	};

	Details.navigatorCallback = function (topIndex, bottomIndex) {
		return bottomIndex;
	};

	function loadTopicsAfter(after, direction, callback) {
		callback = callback || function () {};

		hooks.fire("action:topics.loading");
		const params = utils.params();
		infinitescroll.loadMore(
			"categories.loadMore",
			{
				cid: ajaxify.data.cid,
				after: after,
				direction: direction,
				query: params,
				categoryTopicSort: config.categoryTopicSort,
			},
			function (data, done) {
				hooks.fire("action:topics.loaded", { topics: data.topics });
				callback(data, done);
			}
		);
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

	function setHeader(groupObj) {
		let headerHtml = '';
		console.log('set header==> ', groupObj);
		if (groupObj.isOwner) {
			headerHtml = `
				<div class='club-join-hint isOwner'>
					<h3># ${groupObj.displayName}</h3>
					<span class='tag'>owner</span>
				</div>
			`;
		} else if (groupObj.isMember) {
			headerHtml = `
				<div class='club-join-hint isOwner'>
					<h3># ${groupObj.displayName}</h3>
				</div>
			`;
			// headerHtml = `
			// 	<div class='club-join-hint'>
			// 		<h3># ${groupObj.displayName}</h3>
			// 		<button  class="btn btn-danger" data-action="leave" data-group="${groupObj.displayName}" ${groupObj.disableLeave ? " disabled" : ""}>
			// 			Leave
			// 		</button>
			// 	</div>
			// `;
		} else if (groupObj.isPending) {
			headerHtml = '<button class="btn btn-warning disabled"><i class="fa fa-clock-o"></i> Invitation Pending</button>';
		} else if (groupObj.isInvited) {
			headerHtml = (
				'<button class="btn btn-link" data-action="rejectInvite" data-group="' +
				groupObj.displayName +
				'">[[groups:membership.reject]]</button><button class="btn btn-success" data-action="acceptInvite" data-group="' +
				groupObj.name +
				'"><i class="fa fa-plus"></i> Accept Invitation</button>'
			);
		} else if (
			!groupObj.disableJoinRequests
		) {
			headerHtml = `
				<div class='club-join-hint'>
					<h3># ${groupObj.displayName}</h3>
					<button class="btn btn-success" data-action="join" data-group="${groupObj.displayName}">
						Join
					</button>
				</div>
			`;
		}
		$('#clubs-detail-navbar .club-name')?.eq(0)?.html(headerHtml);
	}
	// ---------------- END /public/src/client/groups/details.js ---------------

	return Details;
});
