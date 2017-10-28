"use strict";
const webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const fs = require('fs');

const testFolder = './frontend/pages';
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

    resolve: {
        modules: [
            'frontend/pages',
            'node_modules'
        ],
        extensions: ['', '.json', '.js', '.jsx', '.ts', '.tsx']
    },

    module: {
        noParse: [
            /node_modules\/chart.js\/dist\/Chart.bundle.min.js/
        ],
        loaders: [{
            test: /\.json$/,
            loader: "json-loader"
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
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!less-loader")
        }, {
            test: /\.(jpe?g|png|svg|gif)$/,
            loader: "file-loader?name=img/[name].[ext]",
            exclude: [
                path.resolve(__dirname, "frontend/fonts/")
            ]
        }, {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            loader: "file-loader?name=fonts/[name].[ext]",
            include: [
                path.resolve(__dirname, "frontend/fonts/")
            ]
        }]
    },
    devServer: {
        contentBase: __dirname + "/public/",
        host: 'localhost',
        port: 3003
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
        new ExtractTextPlugin('main.css')
    ].concat(pages)
};

function createPage(pageName) {
    return new HtmlWebpackPlugin({
        filename: `${pageName}.html`,
        template: `./frontend/pages/${pageName}.pug`,
        inject: false
    })
}