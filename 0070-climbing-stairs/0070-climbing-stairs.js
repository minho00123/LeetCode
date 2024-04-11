/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 4) {
        return n;
    }
    
    let a = 1;
    let b = 1;
    let fib;
    
    for (let i = 2; i <= n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }
    
    return fib;
};