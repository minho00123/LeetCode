/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let n = num;
    
    while (n >= 10) {
        let sum = 0;
        
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        
        n = sum;
    }
    
    return n;
};