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

function hasCycle(head: ListNode | null): boolean {
    if(head == null || head.next == null){
        return false
    }
    let slow = head
    let fast = head.next

    while(slow != fast){
        if(slow.next != null){
            slow = slow.next
        } else {
            return false
        }
        
        if(fast.next != null && fast.next.next != null){
            fast = fast.next.next
        } else {
            return false
        }
    }
    return true
};
