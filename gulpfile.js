'use strict'

var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks');
var sass = require('gulp-sass')(require('sass'));
var browsersync = require('browser-sync');
var del = require('del');
var reload = browsersync.reload;
var clone = require('gulp-clone');
var sink = clone.sink();
var changed = require('gulp-changed');
var webp = require('gulp-webp');
var imagemin = require('gulp-imagemin');
var svgSprite = require('gulp-svg-sprite');
var cheerio = require('gulp-cheerio');


var path = {
  src: {
    html: 'src/*.html',
    styles: 'src/styles/*.scss',
    images: 'src/img/*.{jpg,jpeg,png,webp,svg}',
    js: 'src/js/*.js',
    font: 'src/fonts/*.{woff,woff2,ttf}',
    video: 'src/video/*.{mp4,ogv,webm}',
    svgcolor: 'src/img/svgcolor/*.svg',
    svg: 'src/img/svg/*.svg'
  },
  build: {
    html: 'build/',
    styles: 'build/css/',
    images: 'build/img/',
    js: 'build/js/',
    font: 'build/fonts/',
    video: 'build/video/',
    svgcolor: 'build/img/svgcolor/',
    svg: 'build/img/svg'
  },
  watch: {
    html: 'src/**/*.html',
    styles: 'src/styles/**/*.scss',
    js: 'src/js/*.js',
    video: 'src/video/*.{mp4,ogv,webm}',
    images: 'src/img/**/*.{jpg,jpeg,png,webp,svg}',
    svgcolor: 'src/img/svgcolor/*.svg',
    svg: 'src/img/svg/*.svg'
  },
  base: './build'
};

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: path.base
    },
    port: 3000
  });
  done();
};

function clean() {
  return del(path.base);
};

function html() {
  return gulp
    .src(path.src.html)
    .pipe(nunjucks.compile())
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({ stream: true }));
};

function styles() {
  return gulp
    .src(path.src.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.build.styles))
    .pipe(reload({ stream: true }));
};

function js() {
  return gulp
    .src(path.src.js)
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({ stream: true }));
};

function font() {
  return gulp
    .src(path.src.font)
    .pipe(gulp.dest(path.build.font))
    .pipe(reload({ stream: true }));
};

function video() {
  return gulp
    .src(path.src.video)
    .pipe(gulp.dest(path.build.video))
    .pipe(reload({ stream: true }));
};

function images() {
  return gulp
    .src(path.src.images)
    .pipe(changed(path.build.images))
    .pipe(sink)
    .pipe(webp())
    .pipe(sink.tap())
    .pipe(imagemin())
    .pipe(gulp.dest(path.build.images))
    .pipe(reload({ stream: true }));
};

function svg() {
  return gulp
    .src(path.src.svg)
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../sprite-black.svg"
        }
      }
    }))
    .pipe(gulp.dest(path.build.svg))
    .pipe(reload({ stream: true }));
};

function svgcolor() {
  return gulp
    .src(path.src.svgcolor)
    .pipe(imagemin())
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../sprite-color.svg"
        }
      }
    }))
    .pipe(gulp.dest(path.build.svg))
    .pipe(reload({ stream: true }));
};

function watchFiles() {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.styles], styles);
  gulp.watch([path.watch.images], images);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.video], video);
  gulp.watch([path.watch.svgcolor], svgcolor);
  gulp.watch([path.watch.svg], svg)
};

gulp.task('html', html);
gulp.task('styles', styles);
gulp.task('img', images);
gulp.task('svg', svg);
gulp.task('svgcolor', svgcolor);
gulp.task('js', js);
gulp.task('font', font);
gulp.task('video', video);

gulp.task('build', gulp.series(clean, gulp.parallel(html, styles, images, js, font, video, svgcolor, svg)));
gulp.task('watch', gulp.parallel(watchFiles, browserSync));
