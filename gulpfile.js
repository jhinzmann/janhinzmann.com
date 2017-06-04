'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");
var prefix = require('gulp-autoprefixer');

gulp.task('compileStyles', function () {
  return gulp.src('./src/Styles/janhinzmann.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(prefix("last 10 version", "> 1%"))
    .pipe(rename('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./layouts/partials/')) // write to partials for inlining
    .pipe(gulp.dest('./static/')); // write to static for sourcemap
});

gulp.task('dev', function () {
  gulp.watch('./src/Styles/**/*.scss', ['compileStyles']);
});
