"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify');  // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); //Concatenates files
var lint = require('gulp-eslint'); //Lint JS files, including JSX
var cleanCSS = require('gulp-clean-css'); //this will minify the css
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

var option = process.argv[1];


var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		lint: [
				'./src/components/**/*.js',
				'./src/main.js',
				'./src/routes.js'
		],
		js: [
			'./src/**/*.js'
		],
		images: './src/images/*',
		sass:'./src/Sass/*',
		css: [
      		'node_modules/bootstrap/dist/css/bootstrap.css',
      		'node_modules/bootstrap/dist/css/bootstrap-theme.css',
			'node_modules/toastr/build/toastr.css',
			'node_modules/animate.css/animate.min.css',
			'src/styles.css' //custom styles

			//***remove CSS unless dropzone is working
			//'node_modules/dropzone/dist/dropzone.css',
			//'node_modules/react-dropzone-component/styles/filepicker.css'
    	],
		fonts:[
			'node_modules/bootstrap/dist/fonts/*'
		],
		dist: './dist',
		mainJs: './src/main.js'
	}
}

//Start a local development server
gulp.task('connect', function() {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('open', ['connect'], function() {
	gulp.src('dist/index.html')
		.pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task('js', function() {
	browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

gulp.task('ugly-js',['js'], function() {
   gulp.src(config.paths.dist + '/scripts/bundle.js')
    .pipe(rename('bundlemin.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.paths.dist + '/scripts'));
});

// Register tasks
gulp.task('concat-min', function() {
   gulp.src(files)
    .pipe(concat('script.min.js'))
    
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'))
		.pipe(connect.reload());
});

gulp.task('fonts', function() {
	gulp.src(config.paths.fonts)
		.pipe(gulp.dest(config.paths.dist + '/fonts'));
});

gulp.task('min-css', function() {
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images', function() {
	    gulp.src(config.paths.images)
		.pipe(gulp.dest(config.paths.dist + '/images'))
		.pipe(connect.reload());
});

gulp.task('lint', function() {
	return gulp.src(config.paths.lint)
		.pipe(lint({config: 'eslint.config.json'}))
		.pipe(lint.format());
});

gulp.task('watch', function() {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js', 'lint']);
	gulp.watch('src/styles.css', ['css']);
});

gulp.task('sass', function () {
  return gulp.src(config.paths.sass)
    .pipe(sass().on('error', sass.logError))	
	//.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch(config.paths.sass, ['sass']);
});

//default, run in browser no min. cmd: 'gulp'
gulp.task('default', ['html', 'js', 'css','images','fonts','lint', 'open', 'watch']);

//will build files with seperate CSS files, 
//copy and past from dist directory to QA server cmd: 'gulp buildqa'
gulp.task('buildqa',['html', 'js', 'css','images','fonts','lint'] );

//build with min, look in dist folder for build. cmd: 'gulp buildprod'
//awful workaround... but ES6 is making it difficult to uglify JS
// 1. run command twice, the second time generates min file
// 2. deleted bundle.js and leave bundlemin.js
// 3. change reference in indes.html from 'bundle.js' to 'bundlemin.js'
// 4. copy and past dist directory from file to server directory
gulp.task('buildprod', ['html' , 'min-css','images','fonts', 'ugly-js', 'lint']);