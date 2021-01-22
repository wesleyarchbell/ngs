// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

let count = 1;
var intervalId = setInterval(() => {
  if (count === 5) {
    console.log('Done');
    clearInterval(intervalId);
  }
  console.log('Hello World');
  count++;
}, 1000);
