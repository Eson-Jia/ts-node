const gulp = require("gulp");
const ts = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');

const tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
    return tsProject.src()

        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.mapSources(function (sourcePath, file) {
            const depth = sourcePath.match(new RegExp("\/", "g")).length - 2;
            return new Array(depth).fill('../').concat() + sourcePath;
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist"));
});