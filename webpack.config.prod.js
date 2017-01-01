const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
          'css!postcss!less'
        )
      }
    ]
  },
  postcss: [
    require('autoprefixer')({ browsers: ['last 2 versions'] })
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    })
  ]
}
