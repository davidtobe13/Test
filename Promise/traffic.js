// const chalk = require("chalk")
// const myTraffic = () =>{
//     setTimeout(()=>{
//         console.log(chalk.red("RED. Stop"));
//     },1000)

//     setTimeout(()=>{
//         console.log(chalk.yellow("YELLOW. Ready"));
//     }, 3000)

//     setTimeout(()=>{
//         console.log(chalk.green("GREEN. Go"));
//     }, 6000)
// }

// myTraffic()



const chalk = require("chalk")
const myTraffic = () =>{
    const red = setInterval(()=>{
        console.log(chalk.red("RED. Stop"));
    },)
    setTimeout(()=>{
       clearInterval(red);
    },)

    setTimeout(()=>{
    const yellow = setInterval(()=>{
        console.log(chalk.yellow("YELLOW. Ready"));
    },)
    setTimeout(()=>{
       clearInterval(yellow);
    },)
    }, 30000)
    setTimeout(()=>{
    const green = setInterval(()=>{
        console.log(chalk.green("GREEN. Go"));
    },)
    setTimeout(()=>{
       clearInterval(green);
    },)
}, 60000)
}

myTraffic()