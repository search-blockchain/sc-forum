'use strict';

const path = require('path');

const nconf = require('nconf');

const db = require('../database');
const image = require('../image');
const file = require('../file');

module.exports = function (Clubs) {
	const allowedTypes = ['image/png', 'image/jpeg', 'image/bmp'];
	Clubs.updateCoverPosition = async function (clubName, position) {
		if (!clubName) {
			throw new Error('[[error:invalid-data]]');
		}
		await Clubs.setClubField(clubName, 'cover:position', position);
	};

	Clubs.updateCover = async function (uid, data) {
		let tempPath = data.file ? data.file.path : '';
		try {
			// Position only? That's fine
			if (!data.imageData && !data.file && data.position) {
				return await Clubs.updateCoverPosition(data.clubName, data.position);
			}
			const type = data.file ? data.file.type : image.mimeFromBase64(data.imageData);
			if (!type || !allowedTypes.includes(type)) {
				throw new Error('[[error:invalid-image]]');
			}

			if (!tempPath) {
				tempPath = await image.writeImageDataToTempFile(data.imageData);
			}

			const filename = `clubCover-${data.clubName}${path.extname(tempPath)}`;
			const uploadData = await image.uploadImage(filename, 'files', {
				path: tempPath,
				uid: uid,
				name: 'clubCover',
			});
			const { url } = uploadData;
			await Clubs.setClubField(data.clubName, 'cover:url', url);

			await image.resizeImage({
				path: tempPath,
				width: 358,
			});
			const thumbUploadData = await image.uploadImage(`clubCoverThumb-${data.clubName}${path.extname(tempPath)}`, 'files', {
				path: tempPath,
				uid: uid,
				name: 'clubCover',
			});
			await Clubs.setClubField(data.clubName, 'cover:thumb:url', thumbUploadData.url);

			if (data.position) {
				await Clubs.updateCoverPosition(data.clubName, data.position);
			}

			return { url: url };
		} finally {
			file.delete(tempPath);
		}
	};

	Clubs.removeCover = async function (data) {
		const fields = ['cover:url', 'cover:thumb:url'];
		const values = await Clubs.getClubFields(data.clubName, fields);
		await Promise.all(fields.map((field) => {
			if (!values[field] || !values[field].startsWith(`${nconf.get('relative_path')}/assets/uploads/files/`)) {
				return;
			}
			const filename = values[field].split('/').pop();
			const filePath = path.join(nconf.get('upload_path'), 'files', filename);
			return file.delete(filePath);
		}));

		await db.deleteObjectFields(`club:${data.clubName}`, ['cover:url', 'cover:thumb:url', 'cover:position']);
	};
};
