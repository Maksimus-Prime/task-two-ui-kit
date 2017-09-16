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
        main: "./frontend/main"
    },
    output: {
        path: __dirname + "/public/",
        filename: "[name].js"
    },

    watch: true,

    module: {
        loaders: [{
            test: /\.json$/, loader: "json-loader"
        }, {
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
            test: /\.(jpe?g|png|gif)$/,
            loader: "file-loader?name=img/[name].[ext]"
        }, {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            loader: "file-loader?name=fonts/[name].[ext]"
        }],
        noParse: /node_modules\/chart.js\/dist\/.js$/
    },
    devServer: {
    	contentBase: __dirname + "/public/",
    	host: '192.168.1.7',
    	port: 2992,
    	disableHostCheck: true,
    	inline: false
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery/dist/jquery.js",
            jQuery: "jquery/dist/jquery.js"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './frontend/index.pug',
            inject: false
        }),
        new ExtractTextPlugin("main.css", {allChunks: true})
    ]
};

function createPage(pageName) {
    return new HtmlWebpackPlugin({
        filename: `${pageName}.html`,
        template: `./frontend/pages/${pageName}.pug`,
        inject: false
    })
}