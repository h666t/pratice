// const http = require('http')
//
// const server = http.createServer()
//
// server.on('request', (request, response)=>{
//   console.log(request)
//   response.end('hello world!')
// })
//
// server.listen('3000')

const express = require('express')

const app = express()

app.all('/', (request, response, next)=>{
  response.status(400).send('Bad Request')
  // console.log(request.param('name'));
  // response.end()
})

// app.route('/events')
//   .all(function (req, res, next) {
//     console.log(1)
//     next()
//   })
//   .get(function (req, res, next) {
//     res.json({})
//     console.log(2)
//   })
//   .post(function (req, res, next) {
//     // maybe add a new event...
//     console.log(3)
//     res.send()
//   })

// app.use((request, response, next) => {
//   next('未登录')
// })
//
// app.use((error, request, response, next) => {
//   console.log('错误处理1')
//   console.log(error)
//   next(error)
// })
//
// app.use((error, request, response, next) => {
//   console.log('错误处理2')
//   response.end()
// })

// app.route('/xxx')
//   .all((request,response,next)=>{
//     response.write('all')
//     next()
//   })
//   .get((request,response,next)=>{
//     if(request.method === 'GET'){
//       response.write('get')
//       response.end()
//     }else{
//       next()
//     }
//   })
//   .post((request,response,next)=>{
//     if(request.method === 'POST'){
//       response.write('post')
//       response.end()
//     }else{
//       next()
//     }
//   })

// app.use((request,response,next)=>{
//   if(request.path === '/'){
//     response.write('index')
//   }else if(request.path === '/home'){
//     response.write('home')
//   }
//   response.end()
// })

// app.use((req,res,next)=>{
//   console.log('第一个app.use')
//   res.write('hello world!');
//   next()
// })
//
// app.use((req,res,next)=>{
//   console.log('第一个app.use')
//   res.write('hello world!');
//   res.end()
// })

// app.use((req,res,next)=>{
//   res.write('2')
//   // next(new Error('未登录'))
//   next('未登录')
// })
//
// app.use((req,res,next)=>{
//   res.write('3')
//   next()
// })
//
//
//
// app.use((err,req,res,next)=>{
//   res.write('err')
//   next(err)
// })
//
// app.use((err,req,res,next)=>{
//   res.write(err)
//   res.end()
// })
// app.use((req,res,next)=>{
//   if(req.path === '/'){
//     res.write('根目录')
//   }else if(req.path === '/aaa'){
//     res.write('xxx')
//   }
//   res.end()
// })

app.listen(3000, () => {
  console.log('listen 3000 success!')
})

// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
//
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
//
// var app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
// module.exports = app;
