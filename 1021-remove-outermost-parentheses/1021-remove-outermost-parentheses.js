/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let answer = "";
    let parenthesesCount = 0;
    
    for (const char of s) {
        if (char === "(") {
            if (parenthesesCount) {
                answer += char;
            }
            
            parenthesesCount++;
        } else {
            parenthesesCount--;

            if (parenthesesCount) {
                answer += char;
            }
        }
    }
    
    return answer;
};
