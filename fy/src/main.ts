import { appid, key } from './private';
import * as https from 'https'
import * as crypto from "crypto"

export const translate = (word: string, inputLanguage: 'en' | 'zh') => {
  const salt = Math.random()
  const from = inputLanguage
  const to = inputLanguage === "zh" ? 'en' : "zh"
  const query = `${appid}${word}${salt}${key}`
  const queryAfterHex = crypto.createHash("md5").update(query).digest("hex");
  const options = {
    hostname: 'fanyi-api.baidu.com',
    port: 443,
    path: `/api/trans/vip/translate?sign=${queryAfterHex}&q=${encodeURIComponent(word)}&from=${from}&to=${to}&appid=${appid}&salt=${salt}` ,
    method: 'GET'
  }

  const request = https.request(options, res => {
    res.on('data', d => {
      JSON.parse(d.toString()).trans_result.map((item: {src: string, dst:string})=>{
        console.log(item.dst + '\n');
      });
    })
  })
  
  request.on('error', error => {
    console.log('error:');
    console.error(error)
  })
  
  request.end()  
}

