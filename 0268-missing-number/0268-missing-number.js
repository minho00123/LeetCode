/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let total = 0;
    
    for (let i = 1; i <= nums.length; i++) {
        total += i;
    }
    
    return nums.reduce((acc, curr) => acc - curr, total);
};