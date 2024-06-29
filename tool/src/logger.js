const chalk = require("chalk");
const debug = require("debug");

const warning = (...args) => console.log(chalk.yellow(...args));

const log = (...args) => console.log(chalk.grey(...args));

const highlight = (...args) => console.log(chalk.bgCyanBright(...args));

const debugz = (...args) => debug(...args);

module.exports = { warning, log, debugz, highlight };
