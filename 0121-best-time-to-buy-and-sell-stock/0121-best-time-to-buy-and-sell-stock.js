/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const size = prices.length;
    let maxNum = 0;
    let i = 0;
    let j = 1;

    while (j < size) {
        if (prices[i] < prices[j]) {
            const temp = prices[j] - prices[i];

            if (temp > maxNum) {
                maxNum = temp;
            }

            j++;
        } else {
            i++;

            if (i === j) {
                j++;
            }
        }
    }

    return maxNum;
};