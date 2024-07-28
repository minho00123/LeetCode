/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let answer = "";
    
    while (columnNumber > 0) {
        let remainder = columnNumber % 26;
        let quotient = Math.floor(columnNumber / 26);
        
        if (remainder === 0) {
            remainder = 26;
            quotient--;
        }
        
        answer += String.fromCharCode(remainder + 64);
    
        columnNumber = quotient;
    }
    
    return answer.split("").reverse().join("");
};