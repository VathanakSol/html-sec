const js = require("@eslint/js");
const jsdoc = require("eslint-plugin-jsdoc");

module.exports = [
  js.configs.recommended,
  {
    plugins: {
      jsdoc: jsdoc
    },
    rules: {
      "jsdoc/require-description": "error",
      "jsdoc/check-values": "error"
    }
  }
];