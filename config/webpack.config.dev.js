const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.config.common')

const webpackConfig = merge(commonConfig, {
  mode: 'development',
  output: {
    path: '/dist',
    publicPath: '/',
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[id].chunk.js'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    overlay: true,
    port: 8000,
    stats: {
      normal: true
    }
  }
})

module.exports = webpackConfig
