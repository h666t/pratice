import * as http from "http"
const server = http.createServer()
server.addListener("request",(request: http.IncomingMessage, response: http.ServerResponse)=>{
    // console.log(request);
    // console.log(response);
    console.log(request.httpVersion);
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers);
    
    let chunkArray = []
    request.on("data",(chunk)=>{
        chunkArray.push(chunk)
    })

    request.on("end",()=>{
        console.log(Buffer.concat(chunkArray).toString());
        response.write("hello, world\n")
        response.end();
    })
    
});

server.listen(8888, ()=>{
    console.log('start to listen port 8888');
    // console.log(server.address());
});