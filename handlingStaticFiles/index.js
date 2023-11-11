// // import the module
// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const host = "localhost";

// // create a server
// const server = http.createServer((req, res) => {
//   // get the path specified from the request url
//   const filePath = path.join(__dirname, "static", req.url);
//   fs.exists(filePath, (fileExist) => {
//     if (fileExist) {
//       // read the file
//       fs.readFile(filePath, "utf8", (err, data) => {
//         if (err) {
//           res.writeHead(500, { "Content-Type": "text/plain" });
//           res.end("error");
//         } else {
//           // pass the content of the file here
//           const contentType = getContentType(filePath);
//           res.writeHead(200, { "Content-Type": contentType });
//           res.end(data);
//         }
//       });
//     } else {
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("This file does not exist.");
//     }
//   });
// });

// // create a dynamic function for tracking file extensions using the switch
// const getContentType = (filePath) => {
//   // get the extension name
//   const extensionName = path.extname(filePath);
//   // switch the extension names
//   switch (extensionName) {
//     case "html":
//       return "text/html";
//     case "js": 
//       return "application/javascript";
//     case "css":
//       return "text/css";
//     case "txt":
//       return "text/plain";
//     case "jpeg":
//       return "image/jpeg";
//     default:
//       return "application/octet-stream";
//   }
// };

// const port = 2000
// server.listen(port, host, ()=>{
//     console.log(`Server is listening on:http://${host}:${port}`)
// }) ;


const http = require('http');
const fs = require("fs")
const port = 2000
const path = require('path')

const server = http.createServer((req, res)=>{
  const filePath = path.join(__dirname, "static", req.url)
  fs.exists(filePath, (fileExists)=>{

    if (fileExists) {
      fs.readFile(filePath, "utf8", (err, data)=>{
        if (err) {
          res.writeHead(500, {"Content-Type": "text/plain"})
          res.end("Error")
        }
        else{
          const contentType = getContentType(filePath)
          res.writeHead(200, {"Content-Type": contentType})
          res.end(data)
        }
      })
    }
    else{
      res.writeHead(404, {"Content-Type":"text/plain"})
      res.end("This file does not exist")
    }
  })
})
  
const getContentType = (filePath)=>{
  const extensionName = path.extname(filePath)
  switch(extensionName) {
    case "html":
      return "text/html"
    case "txt":
      return "text/plain"
    case "css":
      return "text/css"
    case "js":
      return "application/javascript"
    case "jpg":
      return "image/jpeg"
    default:
      return "application/octet-stream"
  }

}

server.listen(port, ()=>{
  console.log(`Server is listening on localhost:http://${port}`);
});