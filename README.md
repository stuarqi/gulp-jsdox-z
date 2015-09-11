# gulp-jsdox-z

Gulp plugin for the JSDox markdown generator for JSDoc

## Installation

```
npm install --save-dev gulp-jsdox-z
```

## Usage

```
jsdox(destination[, templateDir])
```

```javascript
var gulp = require('gulp');
var jsdox = require('gulp-jsdox-z');

gulp.task('doc', function () {
    gulp.src('src/**/*.js', {read : false})
        .pipe(jsdox('dir/for/documents'));
});
```

## Params

* **destination**

	Documents output directory

* **templateDir**

	Template files directory, reference the 'templates' directory

## Todo

* Optimization templates

