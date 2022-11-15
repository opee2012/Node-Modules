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


    smurf.forEach(keyword => {
        /*
        keyword looks like
        {
           "word": "great",
           "smurf": "smurfy"
        }

        keyword.smurf
        keyword.word

         */
        //string replacement of keyword.word for keyword.smurf

    });

    return convertedText;
}