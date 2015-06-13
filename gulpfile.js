'use strict';

var path = require('path');
var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    del = require('del');


var AUTOPREFIXER_BROWSERS = [
    'ie >= 9',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

gulp.task('styles', function() {
    return gulp.src('./assets/styles/ryan.scss')
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths
        }))
        .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(gulp.dest('./assets/styles'));
});


gulp.task('bundle', function() {
    browserify('./assets/scripts/index.js')
        .bundle()
        .on('error', function(err){
            console.log(err.message);
            this.emit('end');
        })
        .pipe(source('ryan.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./assets/scripts'));
});


gulp.task('clean', function() {
    del([
        './assets/scripts/ryan.js'
    ]);
});

gulp.task('build', ['clean'], function() {
    gulp.start(['styles', 'bundle']);
});
