/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    const words = [];
    
    for (let i = 0; i < sentences.length; i++) {
        const temp = sentences[i].split(" ");
        
        words.push(temp.length);
    }
    
    return Math.max(...words);
};