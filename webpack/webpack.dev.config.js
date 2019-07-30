/* eslint import/no-extraneous-dependencies: 0 */
// const path = require('path')
// const webpack = require('webpack')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    filename: 'bundle.dev.js',
  },
  devtool: 'inline-source-map',
})
