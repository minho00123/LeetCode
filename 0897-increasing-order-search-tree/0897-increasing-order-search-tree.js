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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    const newTree = new TreeNode();
    let temp = newTree;
    
    function inOrder(root) {
        if (!root) {
            return;
        }
        
        if (root.left) {
            inOrder(root.left);
        }
        
        temp.right = new TreeNode(root.val)
        temp = temp.right

        if (root.right) {
            inOrder(root.right)
        }
    }
    
    inOrder(root);
    
    return newTree.right;
};
