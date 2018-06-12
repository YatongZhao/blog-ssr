'use strict'
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const ExtractCss = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  // Setting the following option to `false` will not extract CSS from codesplit chunks.
  // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
  // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`, 
  // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
  allChunks: true
})

exports.ExtractCss = ExtractCss

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: { sourceMap: true }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: { sourceMap: true }
  }

  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {sourceMap: true})
      })
    }

    if (options.extract) {
      return ExtractCss.extract({use: loaders, fallback: 'vue-style-loader'})
    } else return ['vue-style-loader'].concat(loaders)
  }

  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}
