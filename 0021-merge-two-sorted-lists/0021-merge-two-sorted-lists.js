/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let node = new ListNode();
    const first = node;
    
    while (list1 || list2) {
        if (!list1) {
            node.next = list2;
            node = node.next;
            list2 = list2.next;
        } else if (!list2) {
            node.next = list1;
            node = node.next;
            list1 = list1.next;
        } else if(list1.val > list2.val) {
            node.next = list2;
            node = node.next;
            list2 = list2.next;
        } else {
            node.next = list1;
            node = node.next;
            list1 = list1.next;
        }
    }
    
    return first.next;
};
