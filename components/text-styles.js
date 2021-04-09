const chalk = require('chalk');

const errorMsg = chalk.bold.bgRed.yellow;
const successMsg = chalk.bold.bgGreen.yellow;

const primaryColorMsg = chalk.hex('#f9ed69');
const secondaryColorMsg = chalk.hex('#f08a5d');

module.exports = { errorMsg, successMsg, primaryColorMsg, secondaryColorMsg };
