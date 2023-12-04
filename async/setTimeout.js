const logger = require("./logger");

logger.logInfo("Start of the program");

// Delay function
const delay = (ms) => {
  const start = Date.now();
  while (Date.now() - start < ms) {}
};

setTimeout(() => {
  delay(2000);
  logger.logInfo("setTimeout 1 finished..");
}, 0);

setTimeout(() => {
  delay(0);
  logger.logInfo("setTimeout 2 finished..");
}, 0);

// Simulate a time-consuming operation with delay
//delay(500000); // 5 seconds delay

logger.logInfo("End of the program");
