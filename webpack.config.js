"use strict";
const webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const testFolder = './frontend/pages';
const fs = require('fs');
var newHtmlWebpckPlgn = [];


const htmlWebpckPlgn = fs.readdirSync(testFolder).filter(function(file) {
	if(~file.indexOf("pug")) {
		return file;
	}
});

htmlWebpckPlgn.forEach(function(currentPage){
	newHtmlWebpckPlgn.push(currentPage.replace(/\.[^.]+$/, ""));
});

const pages = newHtmlWebpckPlgn.map(createPage);

module.exports = {
	entry: {
		main: "./frontend/pages/main"
	},
	output: {
		path: __dirname + "/public/testsite",
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
		new ExtractTextPlugin("main.css", {allChunks: true})
	].concat(pages)
};

function createPage(pageName) {
	return new HtmlWebpackPlugin({
		filename: `${pageName}.html`,
		template: `./frontend/pages/${pageName}.pug`,
		inject: false
	})
}