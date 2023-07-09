const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const shared = require("./webpack.shared");
const moduleFederationPlugin = require("./module-federation");

module.exports = merge(shared, {
  name: "client",
  target: "web",
  entry: ["@babel/polyfill", path.resolve(__dirname, "../client/index.js")],
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "../dist/_react_base/client"),
    filename: "index.js",
    chunkFilename: "[name].js",
  },
  plugins: [
    moduleFederationPlugin.client,
    new webpack.DefinePlugin({
			__isBrowser__: "true",
		}),
  ],
  module: {
		rules: [
			{
				test: /\.(scss|sass|css)$/i,
				use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
				exclude: /\.module\.css$/,
			},
		],
	},
  externalsPresets: {
		node: true,
	},
	devtool: "source-map",
	devServer: {
		static: {
			directory: path.join(__dirname + "../dist/_react_base/client"),
		},
		historyApiFallback: true,
		hot: true,
		devMiddleware: { writeToDisk: true },
		liveReload: true,
	},
	stats: {
		runtimeModules: true,
	},
	optimization: {
		usedExports: true, // <- remove unused function
	},
  mode: process.env.NODE_ENV,
});
