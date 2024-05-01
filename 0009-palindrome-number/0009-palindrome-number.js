/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    } else if (x < 10) {
        return true;
    } else {
        const arr = [];
        
        while (x !== 0) {
            arr.push(x % 10);
            
            x = (x - (x % 10)) / 10;
        }
        
        let last = arr.length - 1;

        for (let i = 0; i < arr.length / 2; i++) {
            if (arr[i] !== arr[last]) {
                return false;
            }
            
            last--;
        }
        
        return true;
    }
};