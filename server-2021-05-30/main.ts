import * as http from "http"
const server = http.createServer()
server.addListener("request",(request: http.IncomingMessage, response: http.ServerResponse)=>{
    // console.log(request);
    // console.log(response);
    response.write("hello, world\n")
    response.end();
});

server.listen(8888);