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
    
    if(head === null) return null
        
    let curNode = head
    let nextNode = curNode.next

    const memo = {[curNode.val]: 1}
        
    while (nextNode !== null) {
        if (memo[nextNode.val] === undefined) {
            memo[nextNode.val] = 1
            curNode = nextNode
            nextNode = curNode.next
        } else {
            nextNode = nextNode.next
            curNode.next = nextNode
        }
       
    }
    return head
};