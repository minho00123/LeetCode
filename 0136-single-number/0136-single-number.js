/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    
    const counts = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in counts) {
            counts[nums[i]]++;
        } else {
            counts[nums[i]] = 1;
        }
    }
    
    const keys = Object.keys(counts);
    for (let i = 0; i < keys.length; i++) {
        if (counts[keys[i]] === 1) {
            return parseInt(keys[i]);
        }
    }
};