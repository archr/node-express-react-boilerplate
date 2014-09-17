/**
 * Dependencias
 *
 */

var gulp = require('gulp');
var less = require('gulp-less');
var browserify = require('gulp-browserify');
var react = require('gulp-react');

/**
 * Procesa style.less a style.css
 */
gulp.task('style', function(){
  gulp.src(['./server/assets/style.less'])
    .pipe(less())
    .pipe(gulp.dest('./server/public/css'));
});

/**
 * Pasa de .jsx a .js con browserify
 */
gulp.task('app', function () {
  gulp.src(['./client/App.jsx'])
    .pipe(react())
    .pipe(browserify({
      debug: true,
      transform: [ 'reactify' ]
    }))
    .pipe(gulp.dest('./server/public/js'));
});

/**
 * Realiza las tareas cuando hay cambios a less o reactify
 */
gulp.task('dev', function () {
  gulp.watch('./client/**/**', [ 'app' ]);
  gulp.watch('./server/assets/**/**', [ 'style' ]);
});


gulp.task('build', [ 'style', 'app']);