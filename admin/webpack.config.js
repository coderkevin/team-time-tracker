module.exports = {
	entry: './index.js',
	output: {
		path: __dirname,
		filename: 'team-time-tracker-admin.bundle.js',
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
};
