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
const deleteDuplicates = head => {
    
    if (head === null) return head
    
    let curNode = head
    let nextNode = curNode.next

    while ( curNode !== null && nextNode !== null) {
        while (curNode.val === nextNode.val) {
            nextNode = nextNode.next
            if (nextNode === null) {
                curNode.next = null
                return head
            }
        }
        curNode.next = nextNode
        curNode = nextNode
        nextNode = curNode.next
    }
    return head
};