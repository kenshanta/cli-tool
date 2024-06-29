const chalk = require("chalk");
const logger = require("../logger");

const version = (config) => {
  console.log(chalk.blueBright(" tool@1.0.0 "));
  logger.debugz(chalk.grey("Received configuration in start -", config));
};

module.exports = version;
