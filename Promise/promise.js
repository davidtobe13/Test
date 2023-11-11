function wait(ms){
    return new Promise((resolve, reject) =>{
        setTimeout(resolve, ms);
})
}
wait(5000).then(() => {
    console.log("The end of the class")
})
.then(() => {
    console.log("This class is over");  
})
