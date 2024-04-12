/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const keys = {};
    let answer = 0;

    for (const char of s) {
        keys[char] = (keys[char] || 0) + 1;
        
        if (keys[char] % 2 === 0) {
            answer += 2;
        }
    }

    return s.length > answer ? answer + 1 : answer;
};