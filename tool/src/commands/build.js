const chalk = require("chalk");
const logger = require("../logger");

const build = (config) => {
  console.log(chalk.bgBlueBright(" Building the app... "));
  logger.debugz(chalk.grey("Received configuration in start -", config));
};

module.exports = build;
