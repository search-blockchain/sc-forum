/* eslint-disable handle-callback-err */

'use strict';

const async = require('async');
const path = require('path');
const csrf = require('csurf');
const validator = require('validator');
const nconf = require('nconf');
const toobusy = require('toobusy-js');
const util = require('util');

const plugins = require('../plugins');
const meta = require('../meta');
const user = require('../user');
const groups = require('../groups');
const clubs = require('../clubs');
const analytics = require('../analytics');
const privileges = require('../privileges');
const cacheCreate = require('../cache/lru');
const helpers = require('./helpers');
const db = require('../database');
const sockets = require('../socket.io');
const authenticationController = require('../controllers/authentication');
const User = user;
const autoConfirm = true; // Google.settings.autoconfirm;

const controllers = {
	api: require('../controllers/api'),
	helpers: require('../controllers/helpers'),
};

const delayCache = cacheCreate({
	ttl: 1000 * 60,
});

const middleware = module.exports;

const relative_path = nconf.get('relative_path');

middleware.regexes = {
	timestampedUpload: /^\d+-.+$/,
};

const csrfMiddleware = csrf();

middleware.applyCSRF = function (req, res, next) {
	if (req.uid >= 0) {
		csrfMiddleware(req, res, next);
	} else {
		next();
	}
};

middleware.applyCSRFasync = util.promisify(middleware.applyCSRF);

middleware.ensureLoggedIn = (req, res, next) => {
	if (!req.loggedIn) {
		return controllers.helpers.notAllowed(req, res);
	}

	setImmediate(next);
};

Object.assign(middleware, {
	admin: require('./admin'),
	...require('./header'),
});
require('./render')(middleware);
require('./maintenance')(middleware);
require('./user')(middleware);
middleware.uploads = require('./uploads');
require('./headers')(middleware);
require('./expose')(middleware);
middleware.assert = require('./assert');

middleware.stripLeadingSlashes = function stripLeadingSlashes(req, res, next) {
	const target = req.originalUrl.replace(relative_path, '');
	if (target.startsWith('//')) {
		return res.redirect(relative_path + target.replace(/^\/+/, '/'));
	}
	next();
};

middleware.pageView = helpers.try(async (req, res, next) => {
	if (req.loggedIn) {
		await Promise.all([
			user.updateOnlineUsers(req.uid),
			user.updateLastOnlineTime(req.uid),
		]);
	}
	next();
	await analytics.pageView({ ip: req.ip, uid: req.uid });
	plugins.hooks.fire('action:middleware.pageView', { req: req });
});


const Google = {}
Google.getUidByGoogleId = function (gplusid, callback) {
	db.getObjectField('gplusid:uid', gplusid, (err, uid) => {
		if (err) {
			return callback(err);
		}
		callback(null, uid);
	});
};

Google.login = function (gplusid, handle, email, picture, callback) {
	Google.getUidByGoogleId(gplusid, (err, uid) => {
		if (err) {
			return callback(err);
		}
		
		if (uid !== null) {
			// Existing User
			callback(null, {
				uid: uid,
			});
		} else {
			// New User
			const success = async (uid) => {
				if (autoConfirm) {
					await User.setUserField(uid, 'email', email);
					await User.email.confirmByUid(uid);
				}
				// Save google-specific information to the user
				User.setUserField(uid, 'gplusid', gplusid);
				db.setObjectField('gplusid:uid', gplusid, uid);

				// Save their photo, if present
				if (picture) {
					User.setUserField(uid, 'uploadedpicture', picture);
					User.setUserField(uid, 'picture', picture);
				}

				callback(null, {
					uid: uid,
				});
			};

			User.getUidByEmail(email, (err, uid) => {
				if (err) {
					return callback(err);
				}

				if (!uid) {
					// Abort user creation if registration via SSO is restricted
					// if (Google.settings.disableRegistration) {
					// 	return callback(new Error('[[error:sso-registration-disabled, Google]]'));
					// }

					User.create({ username: handle, email: !autoConfirm ? email : undefined }, (err, uid) => {
						console.log('login - googleAuth login -> ', err, uid);
						if (err) {
							return callback(err);
						}
						success(uid);
					});
				} else {
					success(uid); // Existing account -- merge
				}
			});
		}
	});
};

const destroyAsync = util.promisify((req, callback) => req.session.destroy(callback));
const logoutAsync = util.promisify((req, callback) => req.logout(callback));

Google.logout = async function (req, res, next) {
	const payload = {
		next: `${nconf.get('relative_path')}${req.url}`,
	};
	res.clearCookie('forumdata');
	res.clearCookie('express.cacheid');
	res.clearCookie(nconf.get('sessionKey'), meta.configs.cookie.get());
	
	if (!req.loggedIn || !req.sessionID) {
		res.clearCookie(nconf.get('sessionKey'), meta.configs.cookie.get());
		console.log('logout -- not-logged-in')
		res.redirect(payload.next);
		return 
	}
	const { uid } = req;
	const { sessionID } = req;
 
	try {
		await user.auth.revokeSession(sessionID, uid);
		await logoutAsync(req);
		await destroyAsync(req);
		await user.setUserField(uid, 'lastonline', Date.now() - (meta.config.onlineCutoff * 60000));
		await db.sortedSetAdd('users:online', Date.now() - (meta.config.onlineCutoff * 60000), uid);
		await plugins.hooks.fire('static:user.loggedOut', { req: req, res: res, uid: uid, sessionID: sessionID });

		// Force session check for all connected socket.io clients with the same session id
		sockets.in(`sess_${sessionID}`).emit('checkSession', 0);
		plugins.hooks.fire('filter:user.logout', payload);
		return res.redirect(payload.next);
	} catch (err) {
		console.log('logout --- error', err)
		next(err);
	}
}

middleware.googleAuth = helpers.try(async (req, res, next) => {
	console.log('login - googleAuth req.loggedIn -> ', req.loggedIn)
	const isAdmin = req.uid == 1;
	const cookieFromApp = (req.cookies ? req.cookies.forumdata : '') || '';
	const decodeData = Buffer.from(cookieFromApp, 'base64').toString();
	let cacheUid = (req.cookies ? req.cookies['express.cacheid'] : '') || '';
	let appData = {};

	if(cacheUid) {
		cacheUid = cacheUid.substr(13);
	}

	try {
		appData = JSON.parse(decodeData || '{}');
	} catch (e) {
		return next();
	}

	// APP已退出
	if(!cookieFromApp && cacheUid) {
		return await Google.logout(req, res, next);
	}
	if(!cookieFromApp || req.loggedIn && (appData.userId == cacheUid || !cookieFromApp && isAdmin)) {
		return next();
	}
	//  else if(req.loggedIn) {
	// 	await Google.logout(req, res, next);
	// }
	

	// if (req.hasOwnProperty('user') && req.user.hasOwnProperty('uid') && req.user.uid > 0) {
	// 	// TODO no use
	// 	console.log('login - googleAuth update userdata', req.user)
	// 	// Save Google-specific information to the user
	// 	User.setUserField(req.user.uid, 'gplusid', profile.id);
	// 	db.setObjectField('gplusid:uid', profile.id, req.user.uid);
	// 	return next();
	// }
	
	// TODO 两侧增加多余string提高解析门槛
	// TODO 调用GoogleAPI做实际校验
	console.log('login - googleAuth forumdata decode: ', appData);
	const displayName = (appData.username || appData.name);
	const {err, userData} = await new Promise((resolve, reject) => {
		Google.login(appData.sub, displayName, appData.email, appData.picture, (err, userData) => {
			console.log('Google.login', err, userData)
			if (err) {
				return reject({err, userData})
			}
			
			req.isFromApp = true
			userData.appUid = appData.userId
			req.userFromApp = userData
			return resolve({err, userData})
		});
	})
	next();
});

middleware.pluginHooks = helpers.try(async (req, res, next) => {
	// TODO: Deprecate in v2.0
	await async.each(plugins.loadedHooks['filter:router.page'] || [], (hookObj, next) => {
		hookObj.method(req, res, next);
	});

	await plugins.hooks.fire('response:router.page', {
		req: req,
		res: res,
	});

	if (!res.headersSent) {
		next();
	}
});

middleware.validateFiles = function validateFiles(req, res, next) {
	if (!Array.isArray(req.files.files) || !req.files.files.length) {
		return next(new Error(['[[error:invalid-files]]']));
	}

	next();
};

middleware.prepareAPI = function prepareAPI(req, res, next) {
	res.locals.isAPI = true;
	next();
};

middleware.routeTouchIcon = function routeTouchIcon(req, res) {
	if (meta.config['brand:touchIcon'] && validator.isURL(meta.config['brand:touchIcon'])) {
		return res.redirect(meta.config['brand:touchIcon']);
	}
	let iconPath = '';
	if (meta.config['brand:touchIcon']) {
		iconPath = path.join(nconf.get('upload_path'), meta.config['brand:touchIcon'].replace(/assets\/uploads/, ''));
	} else {
		iconPath = path.join(nconf.get('base_dir'), 'public/images/touch/512.png');
	}

	return res.sendFile(iconPath, {
		maxAge: req.app.enabled('cache') ? 5184000000 : 0,
	});
};

middleware.privateTagListing = helpers.try(async (req, res, next) => {
	const canView = await privileges.global.can('view:tags', req.uid);
	if (!canView) {
		return controllers.helpers.notAllowed(req, res);
	}
	next();
});

middleware.exposeGroupName = helpers.try(async (req, res, next) => {
	await expose('groupName', groups.getGroupNameByGroupSlug, 'slug', req, res, next);
});

middleware.exposeClubName = helpers.try(async (req, res, next) => {
	await expose('clubName', clubs.getClubNameByClubSlug, 'slug', req, res, next);
});

middleware.exposeUid = helpers.try(async (req, res, next) => {
	await expose('uid', user.getUidByUserslug, 'userslug', req, res, next);
});

async function expose(exposedField, method, field, req, res, next) {
	if (!req.params.hasOwnProperty(field)) {
		return next();
	}
	res.locals[exposedField] = await method(req.params[field]);
	next();
}

middleware.privateUploads = function privateUploads(req, res, next) {
	if (req.loggedIn || !meta.config.privateUploads) {
		return next();
	}

	if (req.path.startsWith(`${nconf.get('relative_path')}/assets/uploads/files`)) {
		const extensions = (meta.config.privateUploadsExtensions || '').split(',').filter(Boolean);
		let ext = path.extname(req.path);
		ext = ext ? ext.replace(/^\./, '') : ext;
		if (!extensions.length || extensions.includes(ext)) {
			return res.status(403).json('not-allowed');
		}
	}
	next();
};

middleware.busyCheck = function busyCheck(req, res, next) {
	if (global.env === 'production' && meta.config.eventLoopCheckEnabled && toobusy()) {
		analytics.increment('errors:503');
		res.status(503).type('text/html').sendFile(path.join(__dirname, '../../public/503.html'));
	} else {
		setImmediate(next);
	}
};

middleware.applyBlacklist = async function applyBlacklist(req, res, next) {
	try {
		await meta.blacklist.test(req.ip);
		next();
	} catch (err) {
		next(err);
	}
};

middleware.delayLoading = function delayLoading(req, res, next) {
	// Introduces an artificial delay during load so that brute force attacks are effectively mitigated

	// Add IP to cache so if too many requests are made, subsequent requests are blocked for a minute
	let timesSeen = delayCache.get(req.ip) || 0;
	if (timesSeen > 10) {
		return res.sendStatus(429);
	}
	delayCache.set(req.ip, timesSeen += 1);

	setTimeout(next, 1000);
};

middleware.buildSkinAsset = helpers.try(async (req, res, next) => {
	// If this middleware is reached, a skin was requested, so it is built on-demand
	const target = path.basename(req.originalUrl).match(/(client-[a-z]+)/);
	if (!target) {
		return next();
	}

	await plugins.prepareForBuild(['client side styles']);
	const css = await meta.css.buildBundle(target[0], true);
	require('../meta/minifier').killAll();
	res.status(200).type('text/css').send(css);
});

middleware.addUploadHeaders = function addUploadHeaders(req, res, next) {
	// Trim uploaded files' timestamps when downloading + force download if html
	let basename = path.basename(req.path);
	const extname = path.extname(req.path);
	if (req.path.startsWith('/uploads/files/') && middleware.regexes.timestampedUpload.test(basename)) {
		basename = basename.slice(14);
		res.header('Content-Disposition', `${extname.startsWith('.htm') ? 'attachment' : 'inline'}; filename="${basename}"`);
	}

	next();
};

middleware.validateAuth = helpers.try(async (req, res, next) => {
	try {
		await plugins.hooks.fire('static:auth.validate', {
			user: res.locals.user,
			strategy: res.locals.strategy,
		});
		next();
	} catch (err) {
		const regenerateSession = util.promisify(cb => req.session.regenerate(cb));
		await regenerateSession();
		req.uid = 0;
		req.loggedIn = false;
		next(err);
	}
});

middleware.checkRequired = function (fields, req, res, next) {
	// Used in API calls to ensure that necessary parameters/data values are present
	const missing = fields.filter(field => !req.body.hasOwnProperty(field));

	if (!missing.length) {
		return next();
	}

	controllers.helpers.formatApiResponse(400, res, new Error(`[[error:required-parameters-missing, ${missing.join(' ')}]]`));
};
