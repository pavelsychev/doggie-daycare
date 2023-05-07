import webpack from "webpack-stream";


//Создаем функцию js

export const js = () => {
  
  //Получаем необходимый доступ к файлу
  
  return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev }) //если в режиме разработчика то sourcemaps: true
  
  //Подключаем обработку ошибок во время компиляции gulp'ом
  
  .pipe(app.plugins.plumber(
    
    //Добавляем уведомление, которое в случае проблем выведет неполадку на экран  
    
    app.plugins.notify.onError({
        title: "JS",
        message: "Error: <%= error.message %>"
      }))
      )
    
      //Вызываем webpack
      
      .pipe(webpack({
        mode: app.isBuild ? 'production' : 'development',
        //режим разработчика
       // mode:'development'
        output:{
          filename: 'app.min.js',
        }
      }))
    
      //Выгружаем файл в папку с результатом
    
      .pipe(app.gulp.dest(app.path.build.js))
    
      //Обновляем браузер
    
    .pipe(app.plugins.browsersync.stream());
}