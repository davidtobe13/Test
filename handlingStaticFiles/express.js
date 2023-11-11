// const express = require("express");
// const fs = require("fs");
// const path = require("path");
// const host = "localhost";
// const port = 2000;

// const app = express();

// app.get("*", (req, res) => {
//   // get the path specified from the request url
//   const filePath = path.join(__dirname, "static", req.url);
//   fs.exists(filePath, (fileExist) => {
//     if (fileExist) {
//       // read the file
//       fs.readFile(filePath, "utf8", (err, data) => {
//         if (err) {
//           res.status(500).send("error");
//         } else {
//           // pass the content of the file here
//           const contentType = getContentType(filePath);
//           res.status(200).contentType(contentType).send(data);
//         }
//       });
//     } else {
//       res.status(404).send("This file does not exist.");
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
//     case "jpg":
//       return "image/jpeg";
//     default:
//       return "application/octet-stream";
//   }
// };

// app.listen(port, host, () => {
//   console.log(`Server is listening on: http://${host}:${port}`);
// });


const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'static' directory
app.use(express.static('static'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


















