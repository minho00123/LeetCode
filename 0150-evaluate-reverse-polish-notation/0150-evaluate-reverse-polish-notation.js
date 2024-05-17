/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b),
    };
    
    for (const token of tokens) {
        if (operations[token]) {
            const top = stack.pop();
            const second = stack.pop();
            
            stack.push(operations[token](second, top));
        } else {
            stack.push(Number(token));
        }
    }
    
    return stack.pop();
};