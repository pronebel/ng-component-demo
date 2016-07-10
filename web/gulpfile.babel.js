import gulp from 'gulp'
import gutil from 'gulp-util'
import webpack from 'webpack'
import webpackConfig from './webpack.config.babel'

gulp.task('build', (callback) => {
  let config = Object.create(webpackConfig)
  webpack(config, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack', err)
    }
    gutil.log('[webpack]', stats.toString({
      colors: true,
      progress: true
    }))
  })
  callback()
})
