'use strict';

const FS = require('fs');
const PATH = require('path');

function filesDirectory (path, extensions, files) {
	const name = PATH.basename(path);
	const item = { path, name };
	let stats;

	try { stats = FS.statSync(path); }
	catch (e) { return null; }

	if (stats.isFile()) {
		const ext = PATH.extname(path).toLowerCase();
		if (extensions && extensions.length && extensions.indexOf(ext) === -1) return null;
		item.size = stats.size;  // File size in bytes
    files.push(item);
	}
	else {
    FS.readdirSync(path)
			.map(child => filesDirectory(PATH.join(path, child), extensions, files))
			.filter(e => !!e);
	}
	return files;
}

module.exports = filesDirectory;
