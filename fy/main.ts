import * as https from 'https'

export const translate = () => {
  const query = ''
  const options = {
    hostname: 'fanyi-api.baidu.com',
    port: 443,
    path: '/api/trans/vip/translatenodejs.cn?' + query,
    method: 'GET'
  }
  const request = https.request(options, res => {
    console.log(`状态码: ${res.statusCode}`)
  
    res.on('data', d => {
      process.stdout.write(d)
    })
  })
  
  request.on('error', error => {
    console.log('error:');
    console.error(error)
  })
  
  request.end()  
}

