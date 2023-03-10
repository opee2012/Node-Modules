const chalk = require("chalk");
const puns = require("puns.dev");

const myArgs = process.argv.slice(2);

function printPun(puns) {
    console.log(chalk.greenBright(puns.pun));
    console.log(chalk.yellowBright(puns.punchline));
}

// Handled case for search query
function SearchQuery(query) {
    const searchQ = puns.search(query);
    printPun(searchQ[0]);
}

// Handled case for id (NUM)
function IdQuery(id) {
    printPun(puns.get(id));
}

// Handled case for help
function HelpQuery() {
    console.log(chalk.greenBright("SYNOPSIS\n") +
        chalk.yellowBright("\tpun.js [OPTIONS]\n") +
        chalk.greenBright("OPTIONS\n") +
        chalk.yellowBright("\t-s, --search QUERY\n") +
        chalk.magentaBright("\t\tSearches for a pun that matches the QUERY.\n") +
        chalk.yellowBright("\t-id NUM, --id NUM\n") +
        chalk.magentaBright("\t\tOutputs the pun with the id of NUM\n") +
        chalk.yellowBright("\t-h, --help\n") +
        chalk.magentaBright("\t\tOutput a usage message and exit."));
}

// Handled case for no command line arguments for random pun
function RandomQuery() {
    if (myArgs.length > 0) {
        console.log("Incorrect argument syntax. -h or --help for commands.")
        process.exitCode = 1;
    } else printPun(puns.random());
}

switch (myArgs[0]) {
    // Handled case for search query
    case "-s":
    case "--search":
        SearchQuery(myArgs[1]);
        break;
    // Handled case for id (NUM)
    case "-id":
    case "--id":
        IdQuery(myArgs[1])
        break;
    // Handled case for help
    case "-h":
    case "--help":
        HelpQuery();
        break;
    // Handled case for no command line arguments for random pun
    default:
        RandomQuery();
}