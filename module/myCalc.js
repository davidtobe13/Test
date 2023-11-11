const coupleNames = (manName, womanName) =>{

    
    const doSomething = new Promise((resolve) =>{
    const man = Math.floor(Math.random()*100)
    resolve(man)
} )



const doSomethingElse = (a) => {
    const man = a
    const woman = Math.floor(Math.random()*100)
    const average = (man + woman)/2
    const result = {man: a, woman: woman, average: average}
    return result

}

const doThirdThing = (a) => {
    if  (a.average >= 70){
            (`${manName} is: ${a.man}%, ${womanName} is: ${a.woman}%, average is: ${a.average}%. YOU ARE COMPATIBLE AND CAN MARRY`)
    }
     else if (a.average >= 60){
            (`${manName} is: ${a.man}%, ${womanName} is: ${a.woman}%, average is: ${a.average}%. YOU ARE SLIGHTLY COMPATIBLE`)
     }
    else if (a.average >= 50){
        
            (`${manName} is: ${a.man}%, ${womanName} is: ${a.woman}%, average is: ${a.average}%. YOU ARE MANAGABLE`)
    }

    else if  (a.average >= 40){
       
            (`${manName} is: ${a.man}%, ${womanName} is: ${a.woman}%, average is: ${a.average}%. DON'T MARRY`)

    }   
    else{
        (`${manName} is: ${a.man}%, ${womanName} is: ${a.woman}%, average is: ${a.average}%. RUN FOR YOUR LIFE`)
    }

}
function failureCallback(error){
    console.error(`Error: ${error} happened`)
}
doSomething.then((result) => doSomethingElse(result))
.then((newResult) => doThirdThing(newResult))
.then((finalResult)=> {
    console.log(`This is our VERDICT: ${finalResult}`)
})

.catch(failureCallback)
}

coupleNames("Davids", "Mary")
