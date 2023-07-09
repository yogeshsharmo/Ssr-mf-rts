const path = require("path");
const glob = require("glob");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const shared = require("./webpack.shared");
const moduleFederationPlugin = require("./module-federation");

module.exports = merge(shared, {
	name: "server",
	target: false,
	entry: ["@babel/polyfill", path.resolve(__dirname, "../server/index.js")],
	output: {
		path: path.resolve(__dirname, "../dist/_react_base/server"),
		filename: "index.js",
		libraryTarget: "commonjs-module",
	},
	plugins: [
		...moduleFederationPlugin.server,
		new MiniCssExtractPlugin({
			filename: "main.css",
		}),
		new webpack.DefinePlugin({
			__isBrowser__: "false",
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "../public"),
					to: path.resolve(__dirname, "../dist/_react_base/client"),
				},
				{
					from: path.resolve(__dirname, "../serviceWorker"),
					to: path.resolve(__dirname, "../dist"),
				},
			],
		}),
	],
	module: {
		rules: [
			{
				test: /\.(scss|sass|css)$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
				sideEffects: true,
			},
		],
	},
	stats: {
		colors: true,
	},
	node: {
		__filename: true,
		__dirname: true,
	},
	externalsPresets: {
		node: true,
	},
	devtool: "source-map",
	devServer: {
		hot: true,
		devMiddleware: { writeToDisk: true },
		liveReload: true,
	},
	stats: {
		runtimeModules: true,
	},
	optimization: {
		usedExports: true,
	},
	mode: process.env.NODE_ENV,
});
