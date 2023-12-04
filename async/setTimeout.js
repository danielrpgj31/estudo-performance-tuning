const logger = require("./logger");

logger.logInfo("Start of the program");

// Delay function
const delay = (ms) => {
  const start = Date.now();
  while (Date.now() - start < ms) {}
};

setTimeout(() => {
  logger.logInfo("setTimeout 1 - Processing by 7 seconds..");
  delay(7000);
  logger.logInfo("setTimeout 1 - Finished.");
}, 0);

setTimeout(() => {
  //delay(0);
  logger.logInfo("setTimeout 2 - Finished.");
}, 5);

// Simulate a time-consuming operation with delay
//delay(500000); // 5 seconds delay

logger.logInfo("End of the program");
