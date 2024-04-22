/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const answer = [];

    for (let i = 0; i <= n; i++) {
        const binary = i.toString(2);
        let sum = 0;
        
        for (let j = 0; j < binary.length; j++) {
            if (binary[j] === "1") {
                sum++;
            }
        }
        
        answer.push(sum);
    }
    
    return answer;
};