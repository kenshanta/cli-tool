const chalk = require("chalk");
const logger = require("../logger");

const version = (config) => {
  console.log(chalk.bgCyanBright(" tool@1.0.0 "));
  // TODO: check why debugz doesn't fire up
  logger.debugz(
    chalk.redBright("Received configuration in version.js -", config)
  );
};

module.exports = version;
