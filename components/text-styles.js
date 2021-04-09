const chalk = require('chalk');

const errorMsg = chalk.bold.bgRed.yellow;
const successMsg = chalk.bold.bgGreen.yellow;

module.exports = { errorMsg, successMsg };
