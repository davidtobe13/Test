 const fs = require('fs').promises;
  async function copyFile(source, destination){
    try{
        const data = await fs.readFile(source, 'utf8');
        await fs.writeFile(destination, data)
        console.log("This has been read to my file")

    }catch(e) {
        console.log(`Error message: ${e.message}`);

    }

  }
  copyFile("./text.txt", "./test.txt")

