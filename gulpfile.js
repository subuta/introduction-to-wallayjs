var path = require('path');
var gulp = require('gulp');
var $webpack = require('webpack');
var browserSync = require('browser-sync').create();
var $ = require('gulp-load-plugins')();

'use strict';

function webpack(watch, callback) {

    var webpackOptions = {
        watch: watch,
        module: {
            loaders: [
                {test: /\.js$/, exclude: /node_modules|bower_components/, loader: 'babel?presets[]=es2015'}
            ]
        },

        output: {
            filename: 'hello.js',
            library: 'hello',
            libraryTarget: 'umd'
        }
    };

    if (watch) {
        webpackOptions.devtool = 'inline-source-map';
    }

    var webpackChangeHandler = function(err, stats) {
        $.util.log(stats.toString({
            colors: $.util.colors.supportsColor,
            chunks: false,
            hash: false,
            version: false
        }));
        if (watch) {
            watch = false;
            callback();
        } else {
            browserSync.reload();
        }
    };

    return gulp.src('src/hello.js')
        .pipe($.webpack(webpackOptions, null, webpackChangeHandler))
        .pipe(gulp.dest('dist'));
}

gulp.task('scripts', function() {
    return webpack(false);
});

gulp.task('styles', function() {
    return gulp.src('src/hello.css')
        .pipe(gulp.dest('dist'));
});

gulp.task('scripts:watch', ['scripts'], function(callback) {
    return webpack(true, callback);
});

// Watch scss AND html files, doing different things with each.
gulp.task('serve', ['scripts:watch', 'styles'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: './example',
            routes: {
                '/bower_components': 'bower_components',
                '/vendor': 'dist'
            }
        }
    });

    gulp.watch("./example/*.html").on("change", browserSync.reload);
});

gulp.task('default', ['scripts', 'styles']);