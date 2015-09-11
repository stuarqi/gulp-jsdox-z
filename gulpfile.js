var gulp = require('gulp');
var jsdox = require('./index');

gulp.task('jsdox', function () {
    gulp.src('test/*.js', {read: false})
        .pipe(jsdox('test/markdown-doc'));
});