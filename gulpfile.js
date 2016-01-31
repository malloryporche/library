var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');


var jsFiles = ['*.js', 'src/**/*.js'];

// Create a task to check styles//
gulp.task('style', function (){
	return gulp.src(jsFiles)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish', {
			verbose: true
		}))
		.pipe(jscs());
});