/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    
    for (const jewel of jewels) {
        for (const stone of stones) {
            if (jewel === stone) {
                count++;
            }
        }
    }
    
    return count;
};