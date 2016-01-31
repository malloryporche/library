var gulp = require('gulp');
var jshint = require('gulp-jshint');



var jsFiles = ['*.js', 'src/**/*.js'];


// Create a task to check our styles//
gulp.task('style', function(){
	gulp.src(jsFiles)
		.pipe(jshint());
})