// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
	return gulp.src('app/js/*/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
	return gulp.src('scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
	return gulp.src([
		'app/bower_components/angular/angular.min.js',
		'app/bower_components/angular-route/angular-route.min.js',
		'app/bower_components/angular-cookies/angular-cookies.min.js',
		'app/bower_components/angular-gettext/dist/angular-gettext.min.js',
		'node_modules/destiny-client/destiny.min.js',
		'app/*.js',
		'app/js/*/*.js'
	])
		.pipe(concat('all.js'))
		.pipe(gulp.dest('app/dist'))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch('app/*.js', ['lint', 'scripts']);
	gulp.watch('app/js/*/*.js', ['lint', 'scripts']);
	gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);