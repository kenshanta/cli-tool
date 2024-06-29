const chalk = require("chalk");
const logger = require("../logger");

const start = (config) => {
  console.log(chalk.bgGreenBright(" Starting the app "));
  // TODO: check why debugz doesnt fire up
  logger.debugz(chalk.grey("Received configuration in start -", config));
};

module.exports = start;
