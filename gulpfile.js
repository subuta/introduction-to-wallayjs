import gulp from 'gulp';
import riot from 'gulp-riot';

gulp.task('riot', () => {
    gulp.src('./src/hello.tag')
    .pipe(riot({
        type: 'es6',
        template: 'jade',
        modular: true
    }))
    .pipe(gulp.dest('dest'));
});