/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const memory = {};
    
    return function(...args) {
        const key = `${args}`;

        if (key in memory) {
            return memory[key];
        } else {
            memory[key] = fn(...args);

            return memory[key]
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */