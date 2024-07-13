/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target, start = 0, end = nums.length - 1) {
    let mid = Math.floor((start + end) / 2);
    
    if (start > end) {
        return start;
    }
    
    if (nums[mid] === target) {
        return mid;
    } else if (nums[mid] > target) {
        return searchInsert(nums, target, start, mid - 1);
    } else {
        return searchInsert(nums, target, mid + 1, end);
    }
};