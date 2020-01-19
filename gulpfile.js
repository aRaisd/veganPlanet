// gulpfile3
const gulp = require('gulp'),
sass = require('gulp-sass'),
webserver = require('gulp-webserver');

const srcViews = '/',
      destViews = '',
      srcScripts = '',
      destScripts = '',
      srcStyles = '',
      destStyles = '',
      devStyles = '',
      source = '',
      dist = '';

      gulp.task('browser-sync', function() {
        browserSync.init({
            server: {
                baseDir: "./"
            }
        });
      });

const config = {
        paths: {
            src: {
                html: '*.html',
                img: '*.jpg',
                sass: '*.scss',
                js: ['*.js']
            },
            dist: {
                main: '',
                css: '',
                js: '',
                img: ''
            }
        }
    };

// function html() {
//   return gulp.src(source + srcViews + '**/*.html');
// }

function ndx() {
  return gulp.src(source +'index.html')
        //  .pipe(gulp.dest(dist))
         ;
}

function scripts() {
  return gulp.src(source + '*.js');
}

function styles() {
  return gulp.src(source + '*.scss')
         .pipe(sass())
//         .pipe(gulp.dest(dist + destStyles))
         .pipe(gulp.dest('.'))
         ;
}

function watch() {
  gulp.watch(source + 'index.html', ndx);
  gulp.watch(source + '*.js', scripts);
  gulp.watch(source + '*.scss', styles);
  // gulp.watch(source + 'index.html', html);
}

function server() {
  return  gulp.src('.')
              .pipe(
                webserver({
                  // serverReload: {
                  //   dir: source
                  // },
                  livereload: true,
                  port: 3333,
                  open: true
                })
              );
}

var build = gulp.series(
  gulp.parallel(ndx, scripts, styles),
  //  styles),
  // , html),
  server,
  watch
);

gulp.task('default', gulp.series(build,watch));