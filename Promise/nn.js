// function displayNameMultipleTimes(name, times) {
//     return new Promise((resolve) => {
//       let count = 0;
  
//       function display() {
//         if (count < times) {
//           console.log(name);
//           count++;
//           setTimeout(display, 1000); // Wait for 1 second and call display() again
//         } else {
//           resolve('Display completed');
//         }
//       }
  
//       display(); // Start the display loop
//     });
//   }
  
//   console.log('Displaying the name five times with a 1-second interval:');
//   displayNameMultipleTimes('John', 5)
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error('An error occurred:', error);
//     });
  



// const count = () => {
//     const countNumber = setInterval(() =>{
//         console.log("Ubani");

//     }, 1000)

//     setTimeout(()=>{
//         clearInterval(countNumber)
//         console.log("Tine up");
//     }, 5000)
// }



const count = () => {
    const countNumber = setInterval(() => {
        console.log("RED. Stop");
    }, 1000);

    setTimeout(() => {
        clearInterval(countNumber);
        console.log("Ubani"); 
        console.log("Time is Up"); 
    }, 5000);
}

count();






















