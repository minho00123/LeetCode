/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const answer = [];
    const indexes = [];
    const copiedHeights = heights.map((height) => height);
    
    heights.sort((a, b) => b - a);
    
    for (const height of heights) {
        indexes.push(copiedHeights.indexOf(height));
    }
    
    for (const index of indexes) {
        answer.push(names[index]);
    }
    
    return answer;
};