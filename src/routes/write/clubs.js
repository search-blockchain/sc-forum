'use strict';

const router = require('express').Router();
const middleware = require('../../middleware');
const controllers = require('../../controllers');
const routeHelpers = require('../helpers');
const apiMiddleware = require('nodebb-plugin-write-api/routes/v2/middleware');

const { setupApiRoute } = routeHelpers;

module.exports = function () {
	const middlewares = [middleware.ensureLoggedIn];

	setupApiRoute(router, 'post', '/', [...middlewares, middleware.checkRequired.bind(null, ['name'])], controllers.write.clubs.create);
	setupApiRoute(router, 'post', '/custom', [middleware.checkRequired.bind(null, ['name']), apiMiddleware.requireUser, apiMiddleware.requireAdmin], controllers.write.clubs.createByApi);
	setupApiRoute(router, 'head', '/:slug', [middleware.assert.club], controllers.write.clubs.exists);
	setupApiRoute(router, 'put', '/:slug', [...middlewares, middleware.assert.club], controllers.write.clubs.update);
	setupApiRoute(router, 'delete', '/:slug', [...middlewares, middleware.assert.club], controllers.write.clubs.delete);
	setupApiRoute(router, 'put', '/:slug/membership/:uid', [...middlewares, middleware.assert.club], controllers.write.clubs.join);
	setupApiRoute(router, 'delete', '/:slug/membership/:uid', [...middlewares, middleware.assert.club], controllers.write.clubs.leave);
	setupApiRoute(router, 'put', '/:slug/ownership/:uid', [...middlewares, middleware.assert.club], controllers.write.clubs.grant);
	setupApiRoute(router, 'delete', '/:slug/ownership/:uid', [...middlewares, middleware.assert.club], controllers.write.clubs.rescind);

	return router;
};
