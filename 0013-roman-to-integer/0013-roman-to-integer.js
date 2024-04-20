/**
 * @param {string} s
 * @return {number}
 */
const symbol = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

var romanToInt = function(s) {
    let answer = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (symbol[s[i]] < symbol[s[i + 1]]) {
            answer -= symbol[s[i]];
        } else {
            answer += symbol[s[i]];
        }
    }
    
    return answer;
};