// readStream
// import the file system module (fs)

const fs = require("fs")

// read a file
const myReadStream = fs.createReadStream("./text.txt", "utf8")

// read the file in chunk
myReadStream.on("data", (chunk) =>{
    console.log(`Our Chunk: ${chunk}`)
})

// end the read stream operation
myReadStream.on("end", () =>{
    console.log("End of our chunk")
})
