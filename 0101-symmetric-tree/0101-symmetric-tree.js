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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) {
        return true;
    }
    
    return isCorrect(root.left, root.right);
};

function isCorrect(left, right) {
    if (left === right) {
        return true;
    } else if (left === null || right === null) {
        return false;
    } else if (left.val !== right.val) {
        return false;
    }
    
    return isCorrect(left.left, right.right) && isCorrect(left.right, right.left);
}