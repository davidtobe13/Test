
const http = require("http")
const host = "localhost"
const port = 2008

const fs = require("fs")

// read a file


const server = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-Type":"text/plain"})
    res.end()
})
server.listen(port, host, ()=>{
 console.log(`listening on ${port} and listening on ${host}`)
})





