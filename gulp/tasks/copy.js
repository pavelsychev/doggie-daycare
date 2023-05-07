export const copy = () => {
  console.log(app.path.src.files);
  console.log('--------------------------------------------------------------');

  return app.gulp.src(app.path.src.files)
  .pipe(app.gulp.dest(app.path.build.files));
}
