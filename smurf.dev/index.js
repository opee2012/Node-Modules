const smurf = require("./smurfs.json");

/**
 * Replace the text provided with smurified words.
 * @param {string} originalText The text to convert.
 * @returns {string} Smurfified text.
 */
exports.smurfConvert = (originalText) => {
    let convertedText = "";
    //orig text might be something like "I'm having a great day"
    if (originalText === undefined) return originalText;

    let tempArray = originalText.split(" ");

    smurf.forEach(keyword => {
        if (!originalText.includes(keyword.word)) return;

        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i] === keyword.word) tempArray[i] = keyword.smurf;
        }
    });
    convertedText = tempArray.join(" ")

    return convertedText;
}