/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    const arr = num.split("");

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === "0") {
            arr.pop();
        } else {
            return arr.join("");
        }
    }

    return arr.join("");

}