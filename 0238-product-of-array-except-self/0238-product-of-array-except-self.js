/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const answer = [];
    let leftMult = 1;
    let rightMult = 1;
    
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] = rightMult;
        rightMult *= nums[i];
    }
    
    for (let j = 0; j < nums.length; j++) {
        answer[j] *= leftMult;
        leftMult *= nums[j];
    }
    
    return answer;
};