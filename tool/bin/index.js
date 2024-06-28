#!/usr/bin/env node
const arg = require("arg");
const getConfig = require("../src/config/config-mgr");
const chalk = require("chalk");
const start = require("../src/commands/start");
try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
  });

  // logger.debugz("Received args:", args);

  if (args["--start"]) {
    const config = getConfig();
    start(config);
  } else if (args["--build"]) {
    console.log(chalk.blueBright("building the app"));
  }
} catch (error) {
  chalk.error
    ? console.log(chalk.redBright("Chalk error:", chalk.error))
    : console.log(chalk.redBright(error));
}
