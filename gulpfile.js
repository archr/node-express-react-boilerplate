var gulp = require('gulp');
var less = require('gulp-less');
var browserify = require('gulp-browserify');
var react = require('gulp-react');

gulp.task('style', function(){
  gulp.src(['./assets/style.less'])
    .pipe(less())
    .pipe(gulp.dest('./public/css'));
});


gulp.task('app', function () {
  gulp.src(['./client/app.jsx'])
    .pipe(react())
    .pipe(browserify({
      debug: true,
      transform: [ 'reactify' ]
    }))
    .pipe(gulp.dest('public/js'));
});


gulp.task('dev', function () {
  gulp.watch('./client/**/**', [ 'app' ]);
  gulp.watch('./assets/**/**', [ 'style' ]);
});


gulp.task('build', [ 'styles', 'app']);