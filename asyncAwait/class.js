const http = require("http");
const host = "localhost";
const port = 2008;
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  const myReadStream = fs.createReadStream("./data.txt", "utf8" );

  myReadStream.pipe(res);
});

server.listen(port, host, () => {
  console.log(`Listening on ${host}:${port}`);
});
