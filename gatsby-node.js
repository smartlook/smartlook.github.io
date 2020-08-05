const path = require('path')

exports.onCreateWebpackConfig = (args) => {
	args.actions.setWebpackConfig({
		resolve: {
			// '..' in the path because the docz gatsby project lives in the .docz directory
			modules: [path.resolve(__dirname, '../src'), 'node_modules'],
		},
		node: {
			fs: 'empty',
		},
	})
}
