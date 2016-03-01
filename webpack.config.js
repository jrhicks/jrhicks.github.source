var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'app/App.jsx')
  ],

  resolve: {
    //When requiring, you don't need to add these extensions
    extensions: ["", ".js", ".jsx"]
  },

  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!resolve-url!sass?outputStyle=expanded&sourceMap'),
        exclude: /node_modules/
      },
      {
        test: /\.md$/,
        loader: 'wikismith-md-loader'
      }
    ]
  },

  externals: {
    'google': 'google'
  },

  postcss: [
    require('autoprefixer-core')
  ],

  plugins: [
    new ExtractTextPlugin('app.css', {
        allChunks: true
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
  ]
};
