/*eslint-disable*/

var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var paths = {
  markup: {
    ALL: './src/*.html'
  },
  js: {
    ALL: './src/js/*.js',
    MAIN: './src/js/main.js',
    DIST: './dist/js'
  },
  DIST: './dist'
}

gulp.task('markup', function markup() {
  gulp.src(paths.markup.ALL)
    .pipe(gulp.dest(paths.DIST));
});

gulp.task('modules', function modules() {
  browserify({
    entries: paths.js.MAIN,
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest(paths.js.DIST));
});

gulp.task('watch', ['build'], function watch() {
  gulp.watch([paths.js.ALL, paths.markup.ALL], ['build']);
});

gulp.task('build', ['modules', 'markup']);

gulp.task('default', ['watch']);