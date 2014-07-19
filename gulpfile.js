var gulp = require('gulp');

gulp.task('js', function(){
  //Gerar javascript das libs (angular, bootstrap e etc)
})

gulp.task('css', function(){
  //Gerar CSS
})

gulp.task('app', function(){
  //Gerar javascript do app
})

gulp.task('build', ['js', 'css', 'app']);