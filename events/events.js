// import the events module
const eventEmitter = require("events")

// extend a class to the eventEmitter which is a variable
class myEmitter extends eventEmitter{}

// create and object of the class myEmitter
const emittedObject = new myEmitter()


emittedObject.on("lightUp", () =>{
    console.log("Up NEPA")
}) 
emittedObject.emit("lightUp")