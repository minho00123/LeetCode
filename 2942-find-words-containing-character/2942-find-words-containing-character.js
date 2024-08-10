/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    const answer = [];
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            answer.push(i);
        }
    }
    
    return answer;
};