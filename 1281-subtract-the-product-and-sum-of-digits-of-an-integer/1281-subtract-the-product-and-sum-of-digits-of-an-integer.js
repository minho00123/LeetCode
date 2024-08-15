/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const arr = n.toString().split("");
    const num = arr.map(n => Number(n));
    const mult = num.reduce((acc, curr) => acc * curr);
    const sum = num.reduce((acc, curr) => acc + curr);
    
    return mult - sum;
};