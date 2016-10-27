var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['css/*.*','index.html'],function(file){
        livereload.changed(file.path);
    });
});