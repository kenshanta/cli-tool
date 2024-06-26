#!/usr/bin/env node
const arg = require("arg");
// const chalk = require("chalk");

try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
  });

  if (args["--start"]) {
    console.log("starting the app");
  } else if (args["--build"]) {
    console.log("starting the app");
  }
  console.log(args);
} catch (error) {
  console.log("Error: " + error.message);
}
