'use strict';

/**
 * Created by oyvindhabberstad on 08/02/16.
 */

var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    path = require('path'),
    gutil = require('gulp-util');

// Compile ES6 to ES5
gulp.task("babel", function () {
    return gulp.src('**/*.js').pipe(sourcemaps.init()).pipe(babel()).on('error', gutil.log).pipe(sourcemaps.write('.', {
        includeContent: false,
        sourceRoot: function sourceRoot(file) {
            return path.relative(file.path, __dirname);
        }
    })).pipe(gulp.dest('dist'));
});

//# sourceMappingURL=Gulpfile-compiled.js.map
//# sourceMappingURL=Gulpfile-compiled.js.map

//# sourceMappingURL=Gulpfile-compiled-compiled.js.map