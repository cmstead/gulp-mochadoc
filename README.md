# Gulp-Mochadoc #

A Gulp task for running Mochadoc against your existing test codebase.

Find me online:
- [@cm_stead](https://twitter.com/cm_stead)
- [ChrisStead.com](http://www.chrisstead.com)

## Setup ##

First install Gulp-Mochadoc globally from NPM:

`npm install gulp-mochadoc --save-dev`

Then add your runner configuration to your gulpfile:

```
const gulp = require('gulp');
const gulpMochadoc = require('./index.js');

gulp.task('mochadoc', gulpMochadoc({
    test: {
        config: './.mochadocrc'
    }
}));
```

That's it!

## Configuring Mochadoc ##

The best way to configure Mochadoc is to follow the instructions on the [Mochadoc NPM Page](https://www.npmjs.com/package/mochadoc).

A typical `.mochadocrc` file will look like the following:

```
{
    "projectName": "My Groovy Project",
    "files": "./test/**/*.test.js",
    "dest": "./docs/api"
}
```

## Running Gulp-Mochadoc ##

Gulp-Mochadoc runs much like any other Gulp task. Running `gulp mochadoc` will run all configured mochadoc tasks.  This will generate all documents as each configuration defines.

## Commit History ##

### v1.0.0 ###

- First Stable Release