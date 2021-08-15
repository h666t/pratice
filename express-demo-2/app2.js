const express = require('express')
const app = express()

app.set('views', 'views') //设置render使用的文件夹 ，默认views
app.set('view engine', 'ejs') //设置渲染引擎

app.get('/index', (request,response,next)=>{
  response.render('index',{title: 'index'})
  response.end()
})

// const blog = express()
// const blogAdmin = express()
//
// app.use('/blog', blog)
// blog.use('/admin', blogAdmin)
//
// console.dir(app.path()) // ''
// console.dir(blog.path()) // '/blog'
// console.dir(blogAdmin.path()) // '/blog/admin'



// app.set('title', 'my-title')
// app.locals.title = 'myTitle'
// app.use(express.urlencoded())

// app.use('/', (request,response) => {
//   response.send(request.app.get('title'))
//   response.end()
// })

// app.use(express.static('public'))
//
// app.use('/',(request,response,next)=>{
//   response.end()
// })

// const router = require('./routes/users')


// app.use('/user', router)


// app.set('case sensitive routing', true) // 必须放在最前面
// app.set('views', 'view2')
// app.set('view engine', 'pug')
// app.use(express.json())
// app.use(express.static('yyy'))
//
// app.locals.title = 'title1'
//
// app.route('/xxx').all((request,response,next)=>{
//   response.send(app.locals.title)
//   // response.send(request.app.locals.title) 函数在另一个文件内时，可以通过request获取到app
//   response.end()
// })
//
// app.use('/view2', (request,response,next)=>{
//   response.render('index')
// })
//
// app.use('/style.css', (request,response,next)=>{
//   response.send('style.css')
// })
//
// app.use((request, response ,next)=>{
//   console.log(request.body)
//   request.on('data', (chunk)=>{
//     console.log(chunk.toString())
//   })
//   next()
//   response.send('hi')
// })
//
app.listen(3000,()=>{
  console.log('listen port 3000')
})
