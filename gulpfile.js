var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('autoprefixer');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var postcss = require("gulp-postcss");
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var clean = require('gulp-clean');
var pngquant = require('imagemin-pngquant');

/* Локальный web-сервер */
var connect = require('gulp-connect');

/* Препроцессор SASS Для CSS */
var sass = require('gulp-sass');

/* Шаблонизатор HTML */
var jade = require('gulp-jade');

/*  Переменные для работы с react и препроцессором JS Babel  */
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
/*  ----------------------------  */

/* --  Работа с SVG изображениями */
svgSprite				= require('gulp-svg-sprite'); //  создание спрайта
  svgmin = require('gulp-svgmin'), // минификация SVG
	cheerio = require('gulp-cheerio'), // удаление лишних атрибутов из svg
	replace = require('gulp-replace'); // фиксинг некоторых багов

// browser-sync

var server = require("browser-sync");

gulp.task("sass", function() {
  gulp.src("./assets/sass/style.scss")
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer({browsers: ['last 10 versions']}),
    mqpacker({ sort: true })
  ]))
  .pipe(gulp.dest("./public/css"))
  .pipe(minify())
  .pipe(rename("style.min.css"))
  .pipe(gulp.dest("./public/css"))
  .pipe(server.reload({stream: true}));

});

gulp.task("serve", ["sass"], function(){
  server.init({
    server: "./public/"
  });
});

/* оЧищаем папку product */

gulp.task('clean', function () {
	return gulp.src('./public/*', {force: true})
		.pipe(clean());
});

gulp.task('html',function(){
gulp.src('./assets/*.html')
.pipe(gulp.dest('./public/'))
.pipe(connect.reload());
});

gulp.task('fonts',function(){
gulp.src('./assets/font/**/*')
.pipe(gulp.dest('./public/font/'))
.pipe(connect.reload());
});

gulp.task('js',function(){
gulp.src('./public/js/*.js')
.pipe(uglify())
.pipe(gulp.dest('./public/js/'))
.pipe(connect.reload());
});
gulp.task('jslibs',function(){
gulp.src('./assets/js/libs/*.js')
.pipe(uglify())
.pipe(gulp.dest('./public/js/libs/'))
.pipe(connect.reload());
});
gulp.task('jsmods',function(){
gulp.src('./assets/js/modules/**/*.js')
.pipe(uglify())
.pipe(gulp.dest('./public/js/modules/'))
.pipe(connect.reload());
});

gulp.task('img',function(){
gulp.src('./assets/img/*')
.pipe(imagemin({
progressive: true,
svgoPlugins: [{removeViewBox: false}],
use: [pngquant()]
}))
.pipe(gulp.dest('./public/img/'))
.pipe(connect.reload());
});

// jade
gulp.task('jade', function() {
  var YOUR_LOCALS = {};

  gulp.src('./assets/jade/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('./public/'))
});

// Connect Запуск виртуального web-сервера
gulp.task('connect', function() {
connect.server({
root: 'public',
livereload: true
});
});

gulp.task('copyFiles', function() {
  // copy any html files in source/ to public/
  gulp.src('./assets/fonts/*').pipe(gulp.dest('./public/fonts'));
  gulp.src('./assets/sprites/sprite.svg/sprite.svg').pipe(gulp.dest('./public/img/sprite.svg'));
});

// Build React
gulp.task('build_react', function () {
    return browserify({entries: ['./assets/jsx/app.jsx', './assets/js/script.js'], extensions: ['.jsx', '.js'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('public/js'));
});

// Задачи по созданию svg спрайтов

gulp.task('svgSpriteBuild', function () {
	return gulp.src('./assets/img/*.svg')
	// minify svg
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		// remove all fill, style and stroke declarations in out shapes
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
		// cheerio plugin create unnecessary string '&gt;', so replace it.
		.pipe(replace('&gt;', '>'))
		// build svg sprite
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: "./../sprite.svg",
					render: {
						scss: {
							dest:'./assets/sass/_sprite.scss',
							template: "./assets/sass/templates/_sprite_template.scss"
						}
					}
				}
			}
		}))
		.pipe(gulp.dest('./assets/sprites/sprite.svg'));
});

// Watch
gulp.task('watch',function(){
  gulp.watch("./assets/sass/**/*.scss", ['sass']);
  gulp.watch("./assets/jade/*.jade", ['jade']);
  gulp.watch("./assets/*.html", ['html']);
  gulp.watch(["./assets/jsx/*.jsx", "./assets/js/*.js"], ['build_react']);  
  gulp.watch("./assets/js/*.js", ['js']);
  gulp.watch("./assets/js/libs/*.js", ['jslibs']);
  gulp.watch("./assets/js/modules/**/*.js", ['jsmods']);
  gulp.watch("./assets/*",['copyFiles']);
  gulp.watch("./public/js/*.js").on("change", server.reload );
  gulp.watch("./public/*.html").on("change", server.reload );
  gulp.watch("./public/css/*.css").on("change", server.reload );
});

// Default
gulp.task('default', ['clean','jade', 'sass', 'build_react', 'js','jslibs', 'jsmods', 'serve', 'copyFiles','img','watch']);
gulp.task('run', ['jade', 'build_react', 'sass', 'js','jslibs', 'jsmods', 'serve', 'copyFiles','watch']);
gulp.task('build',['clean','svgSpriteBuild','build_react','img','copyFiles']);

//gulp.task('default', ['clean','jade', 'sass', 'build', 'serve', 'copyFiles','img','watch']);
