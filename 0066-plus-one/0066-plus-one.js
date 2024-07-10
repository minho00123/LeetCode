/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            if (digits[i - 1] === undefined) {
                digits[i] = 0;
                digits.unshift(1);
                return digits;
            } else {
                digits[i] = 0;
            }
        } else {
            digits[i]++;
            
            return digits;
        }
    }
};