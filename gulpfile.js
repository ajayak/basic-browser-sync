var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function () {

    browserSync.init({
        server: "./public"
    });

    gulp.watch(["./**/*.css"], ['css']);

    gulp.watch(["./**/*.js", "./**/*.html"])
        .on('change', browserSync.reload);
});

gulp.task('css', function () {
    return gulp.src(["./**/*.css"])
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);