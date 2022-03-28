const path = require('path');

module.exports = {
	reactStrictMode: true,
	// images: { loader: 'imgix', path: '/' },
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	compilerOptions: {
		baseUrl: '.',
	},
	include: ['.'],
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
};
