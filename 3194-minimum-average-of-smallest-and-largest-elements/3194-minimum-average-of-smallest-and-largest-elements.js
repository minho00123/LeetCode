/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    nums.sort((a, b) => a - b);
    
    const averages = [];
    
    while (nums.length > 0) {
        const minElement = nums.shift();
        const maxElement = nums.pop();
        
        averages.push((minElement + maxElement) / 2);
    }
    
    return Math.min(...averages);
};