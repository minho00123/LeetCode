/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const result = []
    
    function traverse(root) {
        if (!root) {
            return;
        }

        result.push(root.val);
        
        for (const child of root.children){
            traverse(child);
        }
    }
    
    traverse(root);
    return result;
};