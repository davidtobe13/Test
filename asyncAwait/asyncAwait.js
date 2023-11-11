const fs = require('fs');

// async function readFromFile(){

//     try {
//          await fs.readFile("./data.txt", "utf8", (error, data) => {
//             if (error){
//                 console.log("This file is nonexistent")
//             }
//             else{
//         console.log(data);
//             }
//         });
//     }
//     catch(e){
//         console.log(e.message);
//     }
// }
// readFromFile();

const readFromFile = async ()=>{

    try {
         await fs.readFile("./data.txt", "utf8", (error, data) => {
            if (error){
                console.log("This file is nonexistent")
            }
            else{
        console.log(data);
            }
        });
    }
    catch(e){
        console.log(e.message);
    }
}
readFromFile();