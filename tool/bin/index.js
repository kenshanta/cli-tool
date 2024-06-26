#!/usr/bin/env node
const arg = require("arg");
// const chalk = require("chalk");
const getConfig = require("../src/config/config-mgr");

try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
  });
  if (args["--start"]) {
    const config = getConfig();
    console.log("  Starting the app  ");
    console.log("Received configuration in start -", config);
  } else if (args["--build"]) {
    console.log("building the app");
  }
  console.log(args);
} catch (error) {
  console.log(error);
}
