import * as http from "http"
import * as url from "url";
const server = http.createServer()

interface UrlHash {
    "/index.html": "首页"
}

server.addListener("request",(request: http.IncomingMessage, response: http.ServerResponse)=>{
    // console.log(request);
    // console.log(response);
    // console.log(request.httpVersion);
    // console.log(request.url);
    // console.log(request.method);
    // console.log(request.headers);
    let responseData: string = "空"
    // const queryString = new URL(request.url)
    // console.log(request.headers.host);
    // console.log('---');
    // console.log(Date.now());
    console.log(request.url);
    
    // console.log(new URL('https://' + request.headers.host) );
    
    // console.log(new URL(request.headers.referer ));
    
    
    // let chunkArray = []
    const urlHash: UrlHash = {
        "/index.html":"首页"
    } 
    
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
        response.end();
    // })

});

server.listen(8888, ()=>{
    console.log('start to listen port 8888');
    // console.log(server.address());
});
