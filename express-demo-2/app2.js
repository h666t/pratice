const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('yyy'))

app.use((request, response ,next)=>{
  console.log(request.body)
  request.on('data', (chunk)=>{
    console.log(chunk.toString())
  })
  next()
  response.send('hi')
})

app.listen(3000,()=>{
  console.log('listen port 3000')
})
