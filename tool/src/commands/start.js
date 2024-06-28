const chalk = require("chalk");
const logger = require("../logger");

const start = (config) => {
  console.log(chalk.bgGreenBright("  Starting the app  "));
  logger.debugz(chalk.grey("Received configuration in start -", config));
};

module.exports = start;
