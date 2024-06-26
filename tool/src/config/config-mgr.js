const { cosmiconfigSync } = require("cosmiconfig");
const logger = require("../logger");
const configLoader = cosmiconfigSync("tool");
const schema = require("./schema.json");
const Ajv = require("ajv").default;
const ajv = new Ajv();

module.exports = function getConfig() {
  const result = configLoader.search(process.cwd());
  if (!result) {
    return { port: 1234 };
  } else {
    const isValid = ajv.validate(schema, result.config);
    if (!isValid) {
      console.log(ajv.errors);
      process.exit(1);
    }
    return result.config;
  }
};
