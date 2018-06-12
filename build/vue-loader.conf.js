'use strict'
const utils = require('./utils')
const isProduction = process.env.NODE_ENV === 'production'
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ExtractDocs = new ExtractTextPlugin('docs.md')

const vueLoaderConfig = {
  loaders: {
    ...utils.cssLoaders({
      sourceMap: true,
      extract: isProduction
    }),
    'docs': ExtractDocs.extract('raw-loader')
  },
  cssSourceMap: true,
  cssModules: true,
  cacheBusting: true,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}

module.exports = {
  vueLoaderConfig,
  ExtractDocs
}
