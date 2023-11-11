
const http = require("http")
const host = "localhost"
const port = 2008

const server = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-Type":"text/plain"})
    res.write("Hello World \n")
    res.end("This is my first server")
})

server.listen(port, host, ()=>{
    console.log(`This server is listening on : ${host}:${port}`)
})




