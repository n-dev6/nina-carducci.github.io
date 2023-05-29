const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

gulp.task('minify-js', function() {
    return gulp.src('src/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
  });
  
  gulp.task('minify-css', function() {
    return gulp.src('src/css/*.css')
      .pipe(cleanCSS())
      .pipe(gulp.dest('dist/css'));
  });
  
  gulp.task('minify-html', function() {
    return gulp.src('src/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist'));
  });

function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
  exports.default = gulp