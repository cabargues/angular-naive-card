/**
 * Created by cabargues on 2/12/16.
 */
var gulp = require('gulp'),
  addStream = require('add-stream'),
  sass = require('gulp-sass'),
  angularTemplateCache = require('gulp-angular-templatecache'),
  plugins = require('gulp-load-plugins')();
  config = require('./build.conf.js')

;

/////////////////////////////////////////////////////////////////////////////////////
//
// cleans the build output
//
/////////////////////////////////////////////////////////////////////////////////////

gulp.task('clean', function (cb) {
  return gulp
    .src(config.buildFolder, {read: false})
    .pipe(plugins.clean());
});


/////////////////////////////////////////////////////////////////////////////////////
//
// runs sass, creates css source maps
//
/////////////////////////////////////////////////////////////////////////////////////

gulp.task('build-css', ['clean'], function() {
  return gulp.src(config.srcSass)
    .pipe(plugins.concat('temp.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(plugins.rename(config.buildCssFilename))
    .pipe(gulp.dest('./dist/'));
});


/////////////////////////////////////////////////////////////////////////////////////
//
// runs jshint
//
/////////////////////////////////////////////////////////////////////////////////////

gulp.task('jshint', function() {
  gulp.src(config.srcJs)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.jshint.reporter('fail'))
});


function prepareTemplates() {
  return gulp.src(config.srcHtml)
  //.pipe(minify and preprocess the template html here)
    .pipe(angularTemplateCache());
}




/////////////////////////////////////////////////////////////////////////////////////
//
// Build a minified Javascript bundle. If more than one file is concatenated keep an
// eye on the order or use Browserify or similar.
//
/////////////////////////////////////////////////////////////////////////////////////

gulp.task('build-js', ['clean'], function() {

  return gulp.src(config.srcJs)

    // template Cache
    .pipe(addStream.obj(prepareTemplates()))

    // package
    .pipe(plugins.concat(config.buildJsFilename))
    // .pipe(plugins.header(config.closureStart))
    // .pipe(plugins.footer(config.closureEnd))
    .pipe(plugins.header(config.banner))
    .pipe(gulp.dest(config.buildFolder))
    .pipe(plugins.filesize())

    // minify
    .pipe(plugins.uglify())
    .pipe(plugins.rename({ extname: '.min.js' }))
    .pipe(gulp.dest(config.buildFolder))
    .pipe(plugins.filesize())
    .on('error', plugins.util.log);

});

/////////////////////////////////////////////////////////////////////////////////////
//
// full build (except sprites), applies cache busting to the main page css and js bundles
//
/////////////////////////////////////////////////////////////////////////////////////

gulp.task('build', [ 'clean', 'build-css', 'jshint', 'build-js'], function() {
  // return gulp.src('index.html')
  //   .pipe(cachebust.references())
  //   .pipe(gulp.dest('dist'));
});
