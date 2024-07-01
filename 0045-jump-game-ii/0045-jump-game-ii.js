/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let current = -1;
    let next = 0;
    let answer = 0;
    
    for (let i = 0; next < nums.length - 1; i++) {
        if (i > current) {
            answer++;
            current = next;
        }
        
        next = Math.max(next, nums[i] + i);
    }
    
    return answer;
};