/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const result = [];
    const half = nums.slice(n);
    
    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(half[i]);
    }
    
    return result;
};