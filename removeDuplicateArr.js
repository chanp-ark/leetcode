// Given a sorted array nums, remove the duplicates 
// in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, 
// you must do this by modifying the input array in-place with O(1) extra memory.


/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    if ( nums.length === 0 ) return 0
    const memo = {}
    let count = 0;
    while (count < nums.length) {
        if (memo[nums[count]] === undefined) {
            memo[nums[count]] = 1
            count ++
        } else {
            nums.splice(count, 1)
        }
    }
    return nums.length
};

console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))