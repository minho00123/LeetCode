/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    if (s.length % 2 === 1) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        } else if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
            const temp = stack.pop();

            if (temp === "(" && s[i] === ")") {
                continue;
            } else if (temp === "{" && s[i] === "}") {
                continue;
            } else if (temp === "[" && s[i] === "]") {
                continue;
            } else {
                return false;
            }
        }
    }

    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};