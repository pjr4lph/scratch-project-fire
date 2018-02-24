const webpack = require('webpack');
const path = require('path');

const entry = './client/index.jsx';

const output = {
  path: path.resolve(__dirname, 'build'),
  publicPath: '/build/',
  filename: 'bundle.js',
};


module.exports = {
  entry, output,
  devtool: "source-map",
  module: {
    loaders: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets:[ 'es2015', 'react' ]
      }
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
      { loader: "style-loader" },
      { loader: "css-loader" },
      
      ]
    },
    {
      test: /\.less$/,
      exclude: /node_modules/,
      loader: 'style!css!less'
    },
    {
      test: /\.(scss)$/,
      use: [{
      loader: 'style-loader', // inject CSS to page
    }, {
      loader: 'css-loader', // translates CSS into CommonJS modules
    }, {
      loader: 'postcss-loader', // Run post css actions
      options: {
        plugins: function () { // post css plugins, can be exported to postcss.config.js
          return [
          require('precss'),
          require('autoprefixer')
          ];
        }
      }
    }, {
      loader: 'sass-loader' // compiles Sass to CSS
    }]
  },
  ],
},
};  