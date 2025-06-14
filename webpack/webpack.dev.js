const { merge } = require('webpack-merge');
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

const config = require("./config");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true // optional: cleans dist folder on build
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./react-native-poc.html"
    })
  ]
});
