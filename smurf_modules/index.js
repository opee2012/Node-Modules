const smurf = require("./smurfs.json");

/**
 * Search for a specific pun based on provided keyword or keywords.
 * @param {string[]} [keywords] Keyword or List of keywords.
 * @returns {Object[]} smurf - The puns.
 * @returns {string} smurf[].smurf - The pun.
 */
exports.smurfConvert = (keywords) => {
    if (keywords === undefined) return smurf;

    if (!Array.isArray(keywords)) keywords = [keywords];

    let searchResults = [];

    keywords.forEach(keyword => {
        let perKeywordReleventSmurf = smurf.filter(aSmurf => {
            return (aSmurf.smurf.toLowerCase().includes(keyword.toLowerCase()))
        })
        searchResults.push(...perKeywordReleventSmurf)
    });

    return searchResults;
}