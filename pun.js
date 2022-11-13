const chalk = require("chalk");
const puns = require("puns.dev");

/*
NAME
pun.js - Outputs a pun, and it's punchline using colors in the terminal.

SYNOPSIS
pun.js [OPTIONS]

OPTIONS
-s, --search QUERY
    Searches for a pun that matches the query.
-id NUM, --id NUM
    Outputs the pun with the id of NUM
-h, --help
    Output a usage message and exit.*/

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

}

// Handled case for no command line arguments for random pun
function RandomQuery() {
    printPun(puns.random());
}

const myArgs = process.argv.slice(2);

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







