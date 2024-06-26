
var MyQueue = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const item = this.stack.shift();
    
    return item;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (this.stack.length === 0) {
        return true;
    } else {
        return false;
    }
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */