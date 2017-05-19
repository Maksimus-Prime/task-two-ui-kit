'use strict';
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
  	main: "./frontend/main"
  },
  output: {
  	path: __dirname + '/public',
    filename: "[name].js"
  },

  watch: true,

  module: {
        loaders: [{
        	test: /\.js$/,
        	loader: 'babel-loader',
        	query: {
        		presets: ['es2015'],
        		plugins: ['transform-runtime']
          }
        }, {
        	test: /\.pug$/,
        	loader: "pug-loader",
          query: {
            pretty: true
          }
        }, {
          test: /\.(css|less)$/,
          loader: ExtractTextPlugin.extract("style-loader","css-loader!autoprefixer-loader!less-loader")
        }, {
          test: /\.(jpe?g|png|gif)$/, // и здесь убрал svg потому что конфликт между картинками в формате svg и шрифтом svg
          loader: "file-loader?name=img/[name].[ext]"
        }, {
          test: /\.(ttf|eot|otf|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, //пока что убрал svg
          loader: "file-loader?name=fonts/[name].[ext]"
        }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './frontend/index.pug'
    }),
    new ExtractTextPlugin("main.css", {allChunks: true}),
    new webpack.ProvidePlugin({
      'jQuery': 'jquery',
      '$': 'jquery',
      'jquery': 'jquery'
    })
  ]

};