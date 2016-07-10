import path from 'path'
import webpack from 'webpack'

const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'src')

let config = {
  context: APP_DIR,
  entry: {
    home: './apps/home/index.js',
    users: './apps/users/index.js'
  },

  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      include: APP_DIR,
      loaders: ['ng-annotate', 'babel']
    }, {
      test: /\.html$/,
      include: APP_DIR,
      loader: 'html'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },

  devtool: 'source-map',
  plugins: [
    new webpack.NoErrorsPlugin(),
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('commons.js')
  ],

  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  }
}

export default config
