import * as http from "http"
import * as url from "url";
import * as path from 'path'
import * as fs from 'fs'
import { request } from "https";
const server = http.createServer()
const frontendResourcePath = path.join(__dirname, 'ui')



// interface UrlHash {
//     "/index.pug": "首页"
// }

// type FileType = 'html' | 'css' | 'js'

server.addListener("request",(request: http.IncomingMessage, response: http.ServerResponse)=>{
    const fileTypeHash = {
        "html": "text/html",
        "css": "text/css",
        "js": "text/javascript"
    }

    let fileName = request.url.substring(1).replace(/(?<=\?).*/g, '').replace(/\?/,'');
    if(request.url === '/'){
        fileName = 'index.pug'
    }

    const fileType = fileName.replace(/.*(?=\.)/,'').substring(1)

    if(fileTypeHash[fileType]){
        fs.readFile(path.join(frontendResourcePath, fileName),(error:NodeJS.ErrnoException,data:Buffer)=>{
            response.setHeader("content-type", `${fileTypeHash[fileType]}; charset=utf-8`)
            response.write(data.toString())
            response.end()
        })
    }


    // response.end()

    // console.log(request);
    // console.log(response);
    // console.log(request.httpVersion);
    // console.log(request.url);
    // console.log(request.method);
    // console.log(request.headers);
    // let responseData: string = "空"
    // const queryString = new URL(request.url)
    // console.log(request.headers.host);
    // console.log('---');
    // console.log(Date.now());
    // console.log(request.url);

    // console.log(new URL('https://' + request.headers.host) );

    // console.log(new URL(request.headers.referer ));


    // let chunkArray = []
    // const urlHash: UrlHash = {
    //     "/index.pug":"首页"
    // }

    // request.on("data",(chunk: Buffer)=>{
        // chunkArray.push(chunk)
    // })

    // request.on("end",()=>{

        // responseData = urlHash[request.url] || "空"
        // console.log(responseData);

        // console.log(Buffer.concat(chunkArray).toString());
        // response.setHeader("data-huang", "l am huang")
        // response.statusCode = 200
        // response.write(`访问了${responseData}页面`)
        // response.write(queryString)
        // response.end();
    // })

});

server.listen(8888, ()=>{
    console.log('start to listen port 8888');
    // console.log(server.address());
});
