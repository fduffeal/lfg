// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');
var plumber = require('gulp-plumber');

var devip = require('dev-ip');				// Récupération de l'ip du poste pour lancer le serveur local
// SERVER
webserver	= require('gulp-webserver'),					// permet de monter un serveur de fichier en local avec le livereload (rechargement du navigateur à chaque modification d'un fichier du projet) inclus.
sourcemaps	= require('gulp-sourcemaps'),					// facilite le débugage en dév/prod sur le code minifié. Permet de faire la relation entre le code minifié et le code de dév (qui est non minifié et commenté)


// Lint Task
gulp.task('lint', function() {
	return gulp.src('app/js/*/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('compass', function() {
	gulp.src('./app/css/**/*.scss')
		.pipe(plumber({
			errorHandler: function (error) {
				console.log(error.message);
				this.emit('end');
			}}))
		.pipe(compass({
			config_file: 'app/config.rb',
			css: 'app/css',
			sass: 'app/css',
			image: 'app/'
		}))
		.on('error', function(err) {
			console.log(err.message)
			// Would like to catch the error here
		})
		.pipe(minifyCSS())
		.pipe(gulp.dest('/app/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
	return gulp.src([
		'app/bower_components/angular/angular.js',
		'app/bower_components/angular-route/angular-route.js',
		'app/bower_components/angular-cookies/angular-cookies.js',
		'app/bower_components/angular-gettext/dist/angular-gettext.js',
		'app/bower_components/angular-animate/angular-animate.js',
		'app/bower_components/textAngular/dist/textAngular.min.js',
		'app/bower_components/textAngular/dist/textAngular-rangy.min.js',
		'app/bower_components/textAngular/dist/textAngular-sanitize.min.js',
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
	gulp.watch('app/css/*/*.scss', ['compass']);
	gulp.watch('app/css/*.scss', ['compass']);
});

/*
 *
 * SERVEUR LOCALHOST + LIVERELOAD
 *		- server : lancement d'un serveur http://localhost:8000/
 *		- watch : fonctionnalité livereload (rechargement du navigateur à la modification d'un fichier)
 *
 */
gulp.task('server', function() {

	var port = 8000,
	host = '0.0.0.0',
	openUrl = 'http://' + devip()[0] + ':' + port; // équivaut à localhost. On peut se connecter sur les envs de dév des copains en tapant sur leur IP !


	return gulp.src(__dirname + '/app')
		.pipe(
		webserver({
			host: host,
			port: port,
			open: openUrl,
			livereload: false,
			fallback: 'index.html'
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