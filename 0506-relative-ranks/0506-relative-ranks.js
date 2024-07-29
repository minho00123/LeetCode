/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const answer = [];
    const originalScore = [...score];

    score.sort((a, b) => b - a);
    
    for (let i = 0; i < originalScore.length; i++) {
        for (let j = 0; j < score.length; j++) {
            if (originalScore[i] === score[j]) {
                answer.push(`${j + 1}`);
            }
        }
    }
    
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === "1") {
            answer.splice(i, 1, "Gold Medal");
        } else if (answer[i] === "2") {
            answer.splice(i, 1, "Silver Medal");
        } else if (answer[i] === "3") {
            answer.splice(i, 1, "Bronze Medal");
        }
    }
    
    return answer;
};