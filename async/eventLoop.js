console.log('Start of the program');

// Delay function
const delay = (ms) => {
  const start = Date.now();
  while (Date.now() - start < ms) {}
};

setTimeout (() => {

  delay(20000);
  console.log('setTimeout 1 finished..')

}, 0)

setTimeout (() => {

  delay(0);
  console.log('setTimeout 2 finished..')

}, 0)


// Simulate a time-consuming operation with delay
//delay(500000); // 5 seconds delay

console.log('End of the program');