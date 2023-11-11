// const express = require('express');
// const PORT = 4040;

// const app = express();
// app.use(express.json());

// app.get('/', async (req, res) => {
//     res.send('Welcome')
// })

// app.listen(PORT, () =>{
//     console.log(`Server is listening on ${PORT}`);
// })



// const express = require("express")
// const PORT = 4040

// const app = express()

// res.use(express.json())

// app.get("/", async (req, res) =>{
//     res.send("Welcome here")
// })

// app.listen(PORT, () => {
//     console.log(`Listening on ${PORT}`)
//  } )



const express = require("express")
const PORT = 4040

const app = express()
app.use(express.json())

app.get("/", async (req, res) => {
    res.send("This is a message to be displayed")
})

app.listen(PORT, ()=>{
    console.log(`This server is listening on ${PORT}`);
})