/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const arr1 = s.split("");
    const arr2 = t.split("");
    const str1 = [];
    const str2 = [];
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === "#") {
            str1.pop();
        } else {
            str1.push(arr1[i]);
        }
    }
    
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] === "#") {
            str2.pop();
        } else {
            str2.push(arr2[i]);
        }
    }
    
    return str1.join("") === str2.join("");
};