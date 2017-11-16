'use strict';

const gulp = require('gulp');
const gulpMochadoc = require('./index.js');

gulp.task('mochadoc', gulpMochadoc({ test: {} }));