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
const mergeTwoLists = (l1, l2) => {
  // if either list is null, return the other
 if (l1 === null) return l2
 if (l2 === null) return l1
 
 // set tracking variables for each list 
 let trackL1 = l1
 let trackL2 = l2

 // create new variable for merged list, and create its tracking variable
 let merge;
 let trackMerge = merge
 
 // initiate merge list with the smaller value
 if (l1.val <= l2.val) {
   merge = new ListNode(l1.val)
   trackL1 = trackL1.next
 } else {
   merge = new ListNode(l2.val)
   trackL2 = trackL2.next
 }

 // while neither values of tracking are null  
 while (trackL1 !== null && trackL2 !== null) {
   // if val of 1 is less than val of 2
   if (trackL1.val <= trackL2.val) {
     // create new ListNode as trackMerge's next 
     trackMerge.next = new ListNode(trackL1.val)
    // move to next node
     trackMerge = trackMerge.next
     trackL1 = trackL1.next
   // else do the opposite
   } else {
     trackMerge.next = new ListNode(trackL2.val)
     trackMerge = trackMerge.next
     trackL2 = trackL2.next
   }
    
     console.log("THE MERGED", trackMerge)
 }
 
 // append leftover list if either list's value is null
 if (trackL1.val === null) trackMerge.next = trackL2
 if (trackL2.val === null) trackMerge.next = trackL1
 
 // return merged list
 return merge
 
};

