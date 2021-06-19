const fs = require('fs')
const http = require('http')
// const writeStream = fs.createWriteStream('./bigFile.txt',{flags:'a+'});

const server = http.createServer();

server.on('request', (request, response) => {
  const readStream = fs.createReadStream('./bigFile.txt',{flags:'a+'})
  readStream.on('data',(chunk)=>{
    response.write(chunk)
  })
  readStream.on('end', () => {
    response.end()
  })
})
  // readStream.end();
  // response.end(array)
  // fs.readFile('./bigFile.txt', (error,data) => {
  //   response.end(data)
  // })
// })

server.listen('8888')

// let i = 0;
//
// while (i < 10000000){
//   writeStream.write(`这是第${i}条\n`)
//   i++
// }
//
// writeStream.end()
//
// console.log('done')
