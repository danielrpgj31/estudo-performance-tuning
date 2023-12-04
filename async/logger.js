const log4js = require("log4js");

log4js.configure({
  appenders: {
    console: { type: "console" },
  },
  categories: { default: { appenders: ["console"], level: "info" } },
  pm2: false, // Desative o modo PM2, se não estiver usando o PM2
  disableClustering: true, // Desative o agrupamento de logs para evitar duplicatas
  pm2InstanceVar: "INSTANCE_ID", // Define a variável PM2_INSTANCE_ID para diferenciar instâncias PM2
  replaceConsole: true, // Substitui o console.log por log4js em chamadas de console.log
  pm2LogLevel: "warn", // Define o nível de log para PM2
  pm2InstanceVar: "INSTANCE_ID", // Define a variável PM2_INSTANCE_ID para diferenciar instâncias PM2
  format: (log, format) => {
    const timestamp = new Date().toISOString();
    return format(`[${timestamp}] [${log.level}] ${log.data.join(" ")}\n`);
  },
});

const logger = log4js.getLogger();

logInfo = (msg) => {
  logger.info(msg);
};

module.exports = { logInfo };
