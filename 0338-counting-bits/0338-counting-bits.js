/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const result = Array(n + 1).fill(0);
    let offset = 1;
    
    for (let i = 1; i <= n; i++) {
        if (offset * 2 === i) {
            offset = i;
        }
        
        result[i] = 1 + result[i - offset];
    }
    
    return result;
};