var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-uglify');


gulp.task('js', function(){
  //Gerar javascript das libs (angular, bootstrap e etc)
  gulp.src([
    'app/bower_components/jquery/dist/jquery.min.js',
    'app/bower_components/bootstrap/dist/js/bootstrap.min.js',
    'app/bower_components/angular/angular.min.js',
    'app/bower_components/angular-route/angular-route.min.js'
    ])
  .pipe(concat('libs.min.js'))
  .pipe(minify())
  .pipe(gulp.dest('app/js'))
})

gulp.task('css', function(){
  //Gerar CSS
  gulp.src([
    'app/bower_components/bootstrap/dist/css/bootstrap.min.css'
    ])
  .pipe(concat('css.min.css'))
  .pipe(minify())
  .pipe(gulp.dest('app/css'))
})

gulp.task('fonts', function(){
  //Gerar fonts
  gulp.src([
    'app/bower_components/bootstrap/dist/fonts/**'
    ])
  .pipe(gulp.dest('app/fonts'))
})

gulp.task('app', function(){
  //Gerar javascript do app
  gulp.src([
    'app/app.js',
    'app/controllers/**'
    ])
  .pipe(concat('app.min.js'))
  .pipe(minify())
  .pipe(gulp.dest('app/js'))
})

gulp.task('build', ['js', 'css', 'fonts', 'app']);