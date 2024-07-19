/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const answer = [];

    for (const num of nums1) {
        const index = nums2.indexOf(num) + 1;
        let number = -1;
        
        for (let i = index; i < nums2.length; i++) {
            if (num < nums2[i]) {
                number = nums2[i];
                break;
            }
        }
        
        answer.push(number);
    }
    
    return answer;
};