var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'bundle': './src/main.js',
  },

  output: {
    path: './dist',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
        React: 'react'
    }),
  ],

  resolve: {
    root: [
      path.resolve('./node_modules'),
      path.resolve('./src')
    ]
  }
};
