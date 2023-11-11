function displayNameMultipleTimes(name, times) {
    return new Promise((resolve) => {
      let count = 0;
      const intervalId = setInterval(() => {
        console.log(name);
        count++;
        if (count === times) {
          clearInterval(intervalId); // Stop the interval
          resolve('Display completed');
        }
      }, 1000); // Interval of 1 second
    });
  }
  
  console.log('Displaying the name five times with a 1-second interval:');
  displayNameMultipleTimes('Ubani', 5)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
  