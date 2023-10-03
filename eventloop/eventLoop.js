console.log('Start of the program');

// Delay function
const delay = (ms) => {
  const start = Date.now();
  while (Date.now() - start < ms) {}
};

// Simulate a time-consuming operation with delay
delay(5000); // 5 seconds delay

console.log('End of the program');