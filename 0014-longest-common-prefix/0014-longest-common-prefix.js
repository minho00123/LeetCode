/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (char !== strs[j][i]) {
                return prefix;
            }
        }
        
        prefix += char;
    }
    
    return prefix;
};