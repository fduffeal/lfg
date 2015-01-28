// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
// SERVER
webserver	= require('gulp-webserver'),					// permet de monter un serveur de fichier en local avec le livereload (rechargement du navigateur à chaque modification d'un fichier du projet) inclus.
sourcemaps	= require('gulp-sourcemaps'),					// facilite le débugage en dév/prod sur le code minifié. Permet de faire la relation entre le code minifié et le code de dév (qui est non minifié et commenté)


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
		'app/bower_components/angular/angular.js',
		'app/bower_components/angular-route/angular-route.js',
		'app/bower_components/angular-cookies/angular-cookies.js',
		'app/bower_components/angular-gettext/dist/angular-gettext.js',
		'app/*.js',
		'app/js/*/*.js'
	])
		.pipe(sourcemaps.init())
		.pipe(concat('all.js'))
		.pipe(gulp.dest('app/dist'))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('app/dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch('app/*.js', ['lint', 'scripts']);
	gulp.watch('app/js/*/*.js', ['lint', 'scripts']);
	gulp.watch('scss/*.scss', ['sass']);
});

/*
 *
 * SERVEUR LOCALHOST + LIVERELOAD
 *		- server : lancement d'un serveur http://localhost:8000/
 *		- watch : fonctionnalité livereload (rechargement du navigateur à la modification d'un fichier)
 *
 */
gulp.task('server', function() {
	return gulp.src(__dirname + '/app')
		.pipe(
		webserver({
			livereload: true
		})
	);
});

gulp.task('livereload', ['server'], function() {
	return gulp.watch('app/**/*.html', function(file) {
		console.log(file.path + ' has changed');
	});
});

// Default Task
gulp.task('default', ['scripts', 'watch','server','livereload']);