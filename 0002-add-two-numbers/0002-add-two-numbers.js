/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let arr1 = [];
    let arr2 = [];
    
    while (l1) {
        arr1.push(l1.val);
        l1 = l1.next;
    }
    
    while (l2) {
        arr2.push(l2.val);
        l2 = l2.next;
    }
    
    const num1 = BigInt(arr1.reverse().join(""));
    const num2 = BigInt(arr2.reverse().join(""));
    const sumArr = (num1 + num2).toString().split("").reverse();
    const newNode = new ListNode();
    let curr = newNode;
    
    for (let i = 0; i < sumArr.length; i++) {
        curr.val = sumArr[i];
        if (i !== sumArr.length - 1) {
            curr.next = new ListNode();
            curr = curr.next;
        }
    }
    
    return newNode;
};