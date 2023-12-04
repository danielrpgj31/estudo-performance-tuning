const pino = require("pino");
const pretty = require("pino-pretty");

const transport = pino.transport({
  target: "pino-pretty",
  options: { colorize: true },
});

//LEVEL 30 = INFO
const logger = pino({ level: 30 }, transport);

logInfo = (msg) => {
  logger.info(msg);
};

module.exports = { logInfo };
