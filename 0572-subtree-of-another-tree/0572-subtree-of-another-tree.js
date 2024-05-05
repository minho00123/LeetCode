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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!root) {
        return false;
    }
    
    return isEqual(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isEqual(root, subRoot) {
    if (!root && !subRoot) {
        return true;
    }

    if (!root || !subRoot || root.val !== subRoot.val) {
        return false;
    }
    
    const left = isEqual(root.left, subRoot.left);
    const right = isEqual(root.right, subRoot.right);
    
    return left && right;
    
}