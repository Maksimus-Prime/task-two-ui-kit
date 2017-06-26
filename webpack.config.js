"use strict";
const webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		main: "./frontend/main"
	},
	output: {
		path: __dirname + "/public",
		filename: "[name].js"
	},

	watch: true,

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}, {
			test: /\.pug$/,
			loader: "pug-loader",
			query: {
				pretty: true
			}
		}, {
			test: /\.(css|less)$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader")
		}, {
			test: /\.(jpe?g|png|gif)$/, // убрал svg потому что конфликт между картинками в формате svg и шрифтом svg
			loader: "file-loader?name=img/[name].[ext]"
		}, {
			test: /\.(ttf|eot|otf|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
			loader: "file-loader?name=fonts/[name].[ext]"
		}],
		noParse: /node_modules\/chart.js\/dist\/.js$/
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery/dist/jquery.js",
			jQuery: "jquery/dist/jquery.js"
		}),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./frontend/index.pug"
		}),
		new ExtractTextPlugin("main.css", {allChunks: true})
	]
};