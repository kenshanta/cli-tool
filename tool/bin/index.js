#!/usr/bin/env node
const arg = require("arg");
const getConfig = require("../src/config/config-mgr");
const chalk = require("chalk");
const start = require("../src/commands/start");
const build = require("../src/commands/build");
const help = require("../src/commands/help");
const version = require("../src/commands/version");

try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
    "--help": Boolean,
    "--version": Boolean,
  });
  const config = getConfig();

  if (args["--start"]) {
    start(config);
  } else if (args["--build"]) {
    build(config);
  } else if (args["--help"]) {
    help(config);
  } else if (args["--version"]) {
    version(config);
  } else {
    help(config);
  }
} catch (error) {
  chalk.error
    ? console.log(chalk.redBright("Chalk error:", chalk.error))
    : console.log(chalk.redBright(error));
}
