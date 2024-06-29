const chalk = require("chalk");
const logger = require("../logger");

const help = (config) => {
  console.log(chalk.bgYellowBright(" Here are all the commands you can use: "));
  console.log(chalk.yellowBright("*  --start"));
  console.log(chalk.yellowBright("*  --build"));
  console.log(chalk.yellowBright("*  --version"));
  // TODO: check why debugz doesnt fire up
  logger.debugz(chalk.red("Received Configuration In Help:", config));
};

module.exports = help;
