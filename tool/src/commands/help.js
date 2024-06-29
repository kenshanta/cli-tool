const chalk = require("chalk");
const logger = require("../logger");

const help = () => {
  console.log(chalk.yellowBright(" Here are all the commands you can use: "));
  logger.debugz(chalk.red("--start, --version, --build"));
};

module.exports = help;
