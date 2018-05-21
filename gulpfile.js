var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	connect = require('gulp-connect'),
	includer = require('gulp-htmlincluder'),
	livereload = require('gulp-livereload'),
	sass = require('gulp-sass'),
	pump = require('pump'),
	sourcemaps = require('gulp-sourcemaps'),
	path = require('path'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('connect', function() {
	connect.server({
		root: 'app',
		livereload: true
	});
});

gulp.task('html', function() {
	gulp.src('src/**/*.html')
		.pipe(includer())
		.pipe(gulp.dest('app'))
		.pipe(connect.reload());
});

// gulp.task('concat-css', function(){
// 	sass('src/scss/style.scss', {sourcemap: true})
// 		.pipe(sass().on('error', sass.logError))
// 			.pipe(autoprefixer({
// 				browsers: ['> 0%']
// 			}))
// 			.pipe(concatCss('style.css'))
// 			// .pipe(cleanCSS({compatibility: '*'}))
// 		.pipe(sourcemaps.write())
// 		.pipe(gulp.dest('app/css'))
// 		.pipe(connect.reload());
// });

gulp.task('concat-css', function() {
	return gulp.src('src/scss/style.scss')
		.pipe(sourcemaps.init())
			.pipe(sass().on('error', sass.logError))
			.pipe(autoprefixer({
				browsers: ['> 0%']
			}))
			// .pipe(concatCss('style.css'))
			.pipe(cleanCSS({compatibility: '*'}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('app/css'))
		.pipe(connect.reload());
});

gulp.task('min-js', function(cb) {
	pump([
			gulp.src(['src/js/**/*.js']),
			// uglify().on('error', function(e){
			// 	console.log(e);
			// }),
			gulp.dest('app/js'),
		],
		cb
	);
});

gulp.task('watch', function() {
	gulp.watch(['src/**/*.html'], ['html'])
	gulp.watch(['src/css/*.css', 'src/scss/**/*.scss'], ['concat-css'])
	gulp.watch(['src/js/*.js'], ['min-js'])
	// gulp.watch('./sass/**/*.scss', ['sass'])
});

gulp.task('default', ['connect', 'html', 'concat-css', 'min-js', 'watch']);