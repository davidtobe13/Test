// const addNumber = require("./maths.js")
// const subtractNum = require("./maths.js")
// const multiplyNum = require("./maths.js")
// const divideNum = require("./maths.js")

// //addition
// let a = 20
// let b = 13
// let sum = addNumber.add(a, b)
// console.log(sum)

// //subtraction
// let c = 20
// let d = 10
// let answer = subtractNum.sub(c, d)
// console.log(answer)

// // multiplication
// let e = 2
// let f = 13
// let result = multiplyNum.multiply(e, f)
// console.log(result)

// // division
// let g = 20
// let h = 2
// let solution = divideNum.div(g, h)
// console.log(solution)



const { add, sub, multiply, div } = require("./maths.js")

//addition
let a = 20
let b = 13
let sum = add(a, b)
console.log(` The sum is ${sum}`)

//subtraction
let c = 20
let d = 10
let answer = sub(c, d)
console.log(` The answer is ${answer}`)

// multiplication
let e = 2
let f = 13
let result = multiply(e, f)
console.log(` The answer is ${result}`)

// division
let g = 20
let h = 2
let solution = div(g, h)
console.log(` The answer is ${sum}`)