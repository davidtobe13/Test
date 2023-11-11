//callBack
// setTimeout(() =>{
//     console.log("Stop this timer");
// }, 5000)

const { log } = require("console");

//Promise
// const myPromise = new Promise((resolve, reject) =>{
//     return resolve(myPromise)
// })



//Creating Http Server
// const http = require('http');

// const port = 2006
// const host = "localhost"

// const server = http.createServer((req, res) =>{
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.write("Hello, world! \n");
//     res.end("This is David Ugwuegbulam")
// })

// server.listen(port, host, ()=>{

//     console.log(`listening on ${host}:${port}`)
// })



//Creating Http Server to read a file
// const http = require('http');
// const fs = require('fs')
// const port = 2006
// const host = "localhost"

// const server = http.createServer((req, res) =>{
//     res.writeHead(200, {"Content-Type": "text/plain"});

// const myReadStream = fs.createReadStream("./dave.txt","utf8")

// myReadStream.pipe(res)
// })

// server.listen(port, host, ()=>{

//     console.log(`listening on ${host}:${port}`)
// })



//Creating a read stream
// const fs = require("fs")

// const myReadStream = fs.createReadStream("./dave.txt", "utf8")

// myReadStream.on("data", (chunk) => {
//     console.log(chunk);

// })

// myReadStream.on("close", () =>{
//     console.log("\nEnd this stream");
// })



//Creating a write Stream
// const fs = require("fs");

// const myWriteStream = fs.createWriteStream("./dave.txt", "utf8");

// myWriteStream.on("open", () => {
//     console.log("File is open for writing");
// });

// myWriteStream.write("Hello, world!\n This is David Ugwuegbulam.\n He is a Backend Engineer.");

// myWriteStream.on("close", () => {
//     console.log("File close");
// })



//Creating an event
// const eventEmitter = require("events")

// class myEmitter extends eventEmitter{}

// const emittedObject = new myEmitter()

// emittedObject.on("lightup", () => {
//     console.log("The LIGHT is up");
// })

// emittedObject.emit("lightup",)



//Reading a file using async and await
// const fs = require("fs");
// const reader = async () =>{
//     try {
//         await fs.readFile("./dave.txt", "utf8", (error, data) =>{
//             if(error){
//                 console.log("Error reading file");
//             } else{
//                 console.log(data);
//             }
//         })
//     } catch (e) {
//         console.log(e.message);
//     }
// }

// reader()



//Exporting module(s)
//  const add = (firstNum, seconfNum) =>{
//     result = (firstNum + seconfNum)
//     return result 
//  }

// add();

// const subtract = (firstNum, seconfNum) =>{
//     result = (firstNum - seconfNum)
//     return result 
//  }

// subtract();

// module.exports = {
//     add,
//     subtract
// }


//Importing module(s) using dot notation

// const add = require('./maths.js');
// const subtract = require('./maths.js');
//   let firstNum = 40;
//   let secondNum = 20;
//    let sum = add.add(firstNum, secondNum)
//    console.log(sum)

//    let firstNumber = 60;
//    let secondNumber = 10;
//    let answer = subtract.sub(firstNumber, secondNumber)
//    console.log(answer)

//Importing module(s) using destructuring

// const {add, sub} = require('./maths.js');

// let firstNum = 40;
//   let secondNum = 20;
//    let sum = add(firstNum, secondNum)
//    console.log(sum)

//    let firstNumber = 60;
//    let secondNumber = 10;
//    let answer = sub(firstNumber, secondNumber)
//    console.log(answer)

//Using Promise for setTimeout 
// function wait(ms){
//     return new Promise((resolve, reject) =>{
//         setTimeout(resolve, ms);
// })
// }
// wait(1000).then(() => {
//     const count = () => {
//         const countNumber = setInterval(() => {
//             console.log("Ubani");
//         }, 1000);
    
//         setTimeout(() => {
//             clearInterval(countNumber);
//             console.log("Ubani"); 
//             console.log("Time is Up"); 
//         }, 5000);
//     }
    
//     count();
// })





//Writing to a file using async and await
// const fs = require("fs").promises;
// const writeFile = async () =>{
//     try {
        
//         await fs.writeFile("./dave.txt", "This is a new file that is written to this destination")
//         console.log("This file is written successfully")
//     }
//     catch (e) {
//         console.log("Error readinfg this file *********", e.message);
//     }
// }

// writeFile()



// writeFile using callback

// const fs = require("fs");

// const myDocument = "./ave.txt"

// fs.readFile(myDocument, "utf8", (error, data)=>{

//     if(error){
//         console.log(`Message: ${error}`);
//         console.log(`Error reading file: ${myDocument}`);
//     }
//     else{
//         console.log(data);
//     }
// })



// Writefile using Callback

// const fs = require("fs");

// const myDocument = "./dave.txt"

// fs.writeFile(myDocument, "This is a file to be written today to this path", (error) => {
    
//     if (error) {
//         console.log("Error writing to file");
//     }
//     else {
//         console.log("successfully read informations to this file");
//     }
// })




// //Read file using Promise
// const fs = require("fs").promises;

// const myDoc = "./dave.txt"

// fs.readFile(myDoc, "utf8")
// .then((data) => {
//     console.log(data);
// })
// .catch((e) => {
//     console.log(`message: ${e.message}`);
// })