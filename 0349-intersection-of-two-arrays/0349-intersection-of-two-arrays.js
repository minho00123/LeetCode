/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const map = new Map();
    const answer = new Set;
    
    for (const num of nums1) {
        map.set(num, 1);
    }
    
    for (const num of nums2) {
        if (map.get(num)) {
            answer.add(num);
        }
    }
    
    return [...answer];
};