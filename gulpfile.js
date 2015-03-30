var gulp = require('gulp');
var es = require('event-stream');
var wikismith = require('wikismith');
var express = require('express');
var livereload = require('connect-livereload');
var tinylr = require('tiny-lr');

var app = express();
var lr = tinylr();

function serve() {
    wikismith.watch()
        .pipe(wikismith.pipeline())
        .pipe(gulp.dest('build'))
        .pipe(es.map(function(file, cb) {
            lr.changed({body: { files: [file.path] }});
            cb(null, file);
        }));

    app.use(livereload());
    app.use(express.static(__dirname + '/build'));
    app.listen(9292);
    lr.listen(35729);
}

gulp.task('default', function() {
    serve()
});

gulp.task('install', function() {
  npm_install('themes');
  // bower_install();
  // wikismith.install('themes');
})

function npm_install(theme_dir) {
    theme_dir = typeof theme_dir !== 'undefined' ? theme_dir : 'themes';

    var s2 = gulp.src('./'+theme_dir+'/*/package.json')
        .pipe(wikismith.core.npm_install());

    return s2;
}

function bower_install(theme_dir) {
    theme_dir = typeof theme_dir !== 'undefined' ? theme_dir : 'themes';
    var s1 = gulp.src('./'+theme_dir+'/*/bower.json')
        .pipe(wikismith.core.bower_install());


    return s1;
}
