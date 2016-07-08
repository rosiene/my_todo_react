var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    // Bootstrap fonts
    { test: /\.woff2?$/,    loader: "url-loader?limit=10000&minetype=application/font-woff" },
    { test: /\.ttf$/,       loader: "file-loader" },
    { test: /\.eot$/,       loader: "file-loader" },
    // Images
    { test: /\.svg$/,       loader: "file-loader" },
    { test: /\.(png|gif)$/, loader: "file-loader" },
    // Sass, CSS, and style loaders
    { test: /\.scss$/,      loader: 'style!css!sass'}]
  }
};
