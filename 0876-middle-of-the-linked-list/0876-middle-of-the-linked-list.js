/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let length = 0;
    let temp = head;

    while (temp) {
        length++;
        temp = temp.next;
    }
    
    const middle = Math.floor(length / 2) + 1;
    let count = 1;

    while (count !== middle) {
        head = head.next;
        count++;
    }
    
    return head;
};