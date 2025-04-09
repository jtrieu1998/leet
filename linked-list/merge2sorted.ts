/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let l1 = list1
    let l2 = list2
    let temp = new ListNode()
    let dummy = new ListNode()
    dummy = temp
    if(l1 == null) return l2
    if(l2 == null) return l1
    while(l1 != null && l2 != null){  
        if(l1.val <= l2.val){
            temp.next = l1
            l1 = l1.next
        } else {
            temp.next = l2
            l2 = l2.next
        }
        temp = temp.next
    }
    if(l1 == null) temp.next = l2
    if(l2 == null) temp.next = l1

    return dummy.next
};
