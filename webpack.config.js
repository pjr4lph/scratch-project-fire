const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack")
const path = require('path');

const entry = './client/index.jsx';

const output = {
  path: path.resolve(__dirname, 'build'),
  publicPath: '/build/',
  filename: 'bundle.js',
};

module.exports = {
  entry: path.resolve(__dirname, entry), 
  output: output,
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    hot: true,
    port: 8080
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.HotModuleReplacementPlugin()
  ]
};
