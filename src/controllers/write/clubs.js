'use strict';

const api = require('../../api');

const helpers = require('../helpers');

const Clubs = module.exports;

Clubs.exists = async (req, res) => {
	helpers.formatApiResponse(200, res);
};

Clubs.create = async (req, res) => {
	const clubObj = await api.clubs.create(req, req.body);
	helpers.formatApiResponse(200, res, clubObj);
};

Clubs.update = async (req, res) => {
	const clubObj = await api.clubs.update(req, {
		...req.body,
		slug: req.params.slug,
	});
	helpers.formatApiResponse(200, res, clubObj);
};

Clubs.delete = async (req, res) => {
	await api.clubs.delete(req, req.params);
	helpers.formatApiResponse(200, res);
};

Clubs.join = async (req, res) => {
	await api.clubs.join(req, req.params);
	helpers.formatApiResponse(200, res);
};

Clubs.leave = async (req, res) => {
	await api.clubs.leave(req, req.params);
	helpers.formatApiResponse(200, res);
};

Clubs.grant = async (req, res) => {
	await api.clubs.grant(req, req.params);
	helpers.formatApiResponse(200, res);
};

Clubs.rescind = async (req, res) => {
	await api.clubs.rescind(req, req.params);
	helpers.formatApiResponse(200, res);
};
