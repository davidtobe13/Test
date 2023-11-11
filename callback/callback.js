let myCallback = ()=>{
    console.log("This is a callback function");
};

setTimeout(myCallback,5000)


setTimeout(()=>{
    console.log("This is a callback function")
}, 5000)