const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const glob = require("glob");
const path = require("path");
const webpack = require("webpack");
const LoadablePlugin = require('@loadable/webpack-plugin')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				include: /node_modules/,
				type: "javascript/auto",
			},
			{
				test: /\.(js|jsx|mjs)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							cacheDirectory: false,
						},
					},
				],
			},
			{
				test: /\.(jpg|jpeg|png|gif|ico)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "images/[name].[ext]",
							outputPath: "/",
						},
					},
				],
			},
			// {
			// 	test: /\.(scss|sass|css)$/i,
			// 	use: [
			// 		MiniCssExtractPlugin.loader,
			// 		"css-loader",
			// 		"postcss-loader",
			// 		"sass-loader",
			// 	],
			// 	sideEffects: true,
			// },
		],
	},
	plugins: [
		new LoadablePlugin(),
		new PurgeCSSPlugin({
			paths: glob.sync(`${path.resolve(__dirname, "../src")}/**/*`, {
				nodir: true,
			}),
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.SourceMapDevToolPlugin({}),
	],
};
