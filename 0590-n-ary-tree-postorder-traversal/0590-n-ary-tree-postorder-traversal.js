/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const ret = [];
    
    traverse(root);
    
    return ret;
    
    function traverse(root) {
        if (!root) {
            return;
        }
        
        for (const child of root.children) {
            traverse(child);
        }
        
        ret.push(root.val);
    }
};
