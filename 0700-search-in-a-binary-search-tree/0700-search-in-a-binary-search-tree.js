/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let currentNode = root;
    
    while (true) {
        if (!currentNode) {
            return null;
        }
        
        if (currentNode.val === val) {
            return currentNode;
        }
        
        if (currentNode.val > val) {
            currentNode = currentNode.left;
        } else {
            currentNode = currentNode.right;
        }
    }
};