const chalk = require("chalk");
const logger = require("../logger");

const build = (config) => {
  console.log(chalk.bgBlueBright(" Building the app... "));
  // TODO: check why debugz doesnt fire up
  logger.debugz(chalk.grey("Received configuration in start -", config));
};

module.exports = build;
