/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    const arr = n.toString(2).split("");
    for (let i = arr.length; i < 32; i++) {
        arr.unshift(0);
    }
    
    const reversedBinary = arr.reverse().join("");
    
    return parseInt(reversedBinary, 2);
};