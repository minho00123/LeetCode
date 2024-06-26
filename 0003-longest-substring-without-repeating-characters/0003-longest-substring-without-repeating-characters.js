/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let start = 0;
    let maxLen = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            start = Math.max(map.get(s[i]) + 1, start);
        }

        map.set(s[i], i);
        maxLen = Math.max(i - start + 1, maxLen);
    }
    
    return maxLen;
};