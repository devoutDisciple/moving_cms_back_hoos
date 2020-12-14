const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackBase = require('./webpack.base.config');

const webpackBaseConfig = webpackBase('production');

const webpackProdConfig = {
	devtool: false,
	mode: 'production',
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				antd: {
					test: /[\\/]antd[\\/]/,
					name: 'antd',
					chunks: 'all',
				},
				echarts: {
					test: /[\\/]echarts[\\/]/,
					name: 'echarts',
					chunks: 'all',
				},
				reactLib: {
					test: /[\\/](react|react-dom)[\\/]/,
					name: 'reactLib',
					chunks: 'all',
				},
			},
		},
	},
};

const plugins = [
	...webpackBaseConfig.plugins,
	new CleanWebpackPlugin(path.resolve(__dirname, '../dist'), {
		root: path.resolve(__dirname, '../'),
		exclude: 'a.js',
		verbose: true,
		dry: false,
	}),
	new MiniCssExtractPlugin({
		filename: '[name].css',
		chunkFilename: '[id].css',
	}),
];

const webpackConfig = { ...webpackBaseConfig, ...webpackProdConfig, plugins };

module.exports = webpackConfig;
