var gulp = require("gulp"),
    svgstore = require("gulp-svgstore");

gulp.task("default", ["concat_icons"], function () {
    // place code for your default task here
});


gulp.task("concat_icons", function () {
    return gulp
        .src("./icons/**/*.svg")
        .pipe(svgstore())
        .pipe(gulp.dest("."));
});