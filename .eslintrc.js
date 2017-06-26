module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true
  },
  extends: "standard",
  "parserOptions":{
    "ecmaVersion": 8
  },
  // required to lint *.vue files
  plugins: ["html", "pug"],
  // add your custom rules here
  rules: {},
  globals: {}
};
