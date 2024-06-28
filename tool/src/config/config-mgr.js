const { cosmiconfigSync } = require("cosmiconfig");
const logger = require("../logger");
const configLoader = cosmiconfigSync("tool");
const schema = require("./schema.json");
const Ajv = require("ajv").default;
const ajv = new Ajv();
const chalk = require("chalk");

module.exports = function getConfig() {
  const result = configLoader.search(process.cwd());
  if (!result) {
    logger.warning("Could not find configuration, using default");
    return { port: 1234 };
  } else {
    const isValid = ajv.validate(schema, result.config);
    if (!isValid) {
      logger.warning("Invalid configuration was supplied");
      console.log(chalk.ajv.errors);
      process.exit(1);
    }
    logger.debugz("Found configuration", result.config);
    return result.config;
  }
};
