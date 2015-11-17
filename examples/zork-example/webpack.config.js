require('es6-promise').polyfill()

module.exports = {
  entry: [
    __dirname + '/index.js'
  ],
  output: {
    path: '../dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }, {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: '../dist'
  }
}
