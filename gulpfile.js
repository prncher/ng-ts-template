/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://gulpjs.com/
*/

var gulp = require('gulp'),
    debug = require('gulp-debug'),
    inject = require('gulp-inject'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    tsProject = tsc.createProject('tsconfig.json'),
    uglify = require('gulp-uglify'),
	del = require('del');

var Config = (function () {
    function gulpConfig() {
        this.source = './Scripts/';

        this.tsOutputPath = this.source + '/js';
        this.dist = this.source + '/dist';
        this.allJavaScript = this.source + '/js/**/*.js';
        this.allTypeScript = this.source + '/**/*.ts';
        this.someJS = this.source + '/*.js';

        this.typings = './typings/';
        this.libraryTypeScriptDefinitions = './typings/**/*.ts';
    }
    return gulpConfig;
})();

var config = new Config();

gulp.task('dest-clean', function () {
    return del([
      config.dist,
      config.tsOutputPath
    ]);
});

gulp.task('compile-ts-dest', ['ts-lint', 'compile-ts'], function () {
    return gulp.src([config.source + '/js/**/*.*', config.someJS])
          .pipe(gulp.dest(config.dist));
});

gulp.task('minify', ['ts-lint', 'compile-ts'], function () {
    gulp.src(config.allJavaScript)
      .pipe(uglify())
      .pipe(gulp.dest(config.dist));

    return gulp.src([config.someJS]).pipe(gulp.dest(config.dist));
});

gulp.task("ts-lint", function() {
	console.log(config);
     gulp.src(config.allTypeScript)
        .pipe(tslint({
            formatter: "prose"
        }))
        .pipe(tslint.report({
			emitError: false,
			summarizeFailureOutput: true
        }))
});

gulp.task('compile-ts', function () {
    var sourceTsFiles = [config.allTypeScript,                //path to typescript files
                         config.libraryTypeScriptDefinitions]; //reference to library .d.ts files

    var tsResult = gulp.src(sourceTsFiles)
                       .pipe(sourcemaps.init())
                       .pipe(tsProject());

    tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
    return tsResult.js
                    .pipe(sourcemaps.write('.'))
                    .pipe(gulp.dest(config.tsOutputPath));
});

gulp.task('unminify', ['dest-clean', 'compile-ts-dest']);

gulp.task('default', ['dest-clean', 'minify']);