const logger = require("./logger");

logger.logInfo("Start of the program");

// Delay function
const delay = (ms) => {
  const start = Date.now();
  while (Date.now() - start < ms) {}
};

setTimeout(() => {
  logger.logInfo("setTimeout 1 - Processing at 1000 milisegundos..");
  delay(10000);
  logger.logInfo("setTimeout 1 - Finished.");
}, 0);

setInterval(() => {
  //delay(0);
  logger.logInfo("setTimeout 2 - Executed.");
}, 5);

// Simulate a time-consuming operation with delay
//delay(500000); // 5 seconds delay

logger.logInfo("End of the program");
