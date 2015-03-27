var gulp      = require('gulp');
var $         = require('./$');

// shared streams to gulp tasks
var streams = $.streams = {};

//--

var outputCssDir = (
  $.is.release ?
    $.config.paths.dist :
    $.config.paths.build
);

//---

streams.autoprefix = function() {
  return $.autoprefixer( $.config.autoprefixer );
};

//---

streams.less = function() {

  return gulp
    .src( $.config.styles.less.main )
    .pipe( $.if( $.is.debug, $.debug() ) )
    .pipe( $.plumber() )
    .pipe( $.less({ paths: [ $.path.join( $.rootPath, 'src' ) ] }) )
    .pipe( streams.autoprefix() )
    .pipe( $.insert.prepend( $.config.banner ) )
    .pipe( $.if( $.is.release, $.minifyCss() ) )
    .pipe( gulp.dest( $.config.paths.outputDir ) )
    .on( 'error', $.onError );

};

streams.sass = function() {

  return gulp
    .src( $.config.styles.sass.main )
    .pipe( $.if( $.is.debug, $.debug() ) )
    .pipe( $.plumber() )
    .pipe( $.sass() ) // TODO: review
    .pipe( streams.autoprefix() )
    .pipe( $.insert.prepend( $.config.banner ) )
    .pipe( $.if( $.is.release, $.minifyCss() ) )
    .pipe( gulp.dest( $.config.paths.outputDir ) )
    .on( 'error', $.onError );

};