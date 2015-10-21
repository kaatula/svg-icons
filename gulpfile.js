var gulp = require("gulp"),
    svgstore = require("gulp-svgstore"),
    serve = require("gulp-serve");

gulp.task("default", ["concat_icons"], function () {
    // place code for your default task here
});


gulp.task("concat_icons", function () {
    return gulp
        .src("./icons/**/*.svg")
        .pipe(svgstore())
        .pipe(gulp.dest("dist"));
});


<!--  -->
gulp.task("add_svg_watch", function () {
    gulp.watch(["./icons/**/*.svg"], ["concat_icons"])
});

gulp.task("server", serve({
    root: ["."],
    port: 31001
}));