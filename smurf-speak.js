const smurfModule = require("./smurf.dev/index.js");
const chalk = require("chalk");

if (process.argv.length < 3) {
    console.log(chalk.redBright("Invalid input! Please try again."));
    process.exit(1);
}
function filterInt(value) {
    return /^[-+]?(\d+|Infinity)$/.test(value) ? Number(value) : NaN;
}

let inputString = process.argv[2];
if (filterInt(inputString) === inputString) {
    console.log(chalk.redBright("Input was an integer! It needs to be a string."));
    process.exit(1);
}

console.log(chalk.blueBright(smurfModule.smurfConvert(inputString)));

process.exit(0);