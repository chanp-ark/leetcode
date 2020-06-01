/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const searchInsert = (nums, target) => {
    let prev = nums[0];
    if (target <= prev) return 0

    for (let i = 1; i < nums.length; i++) {
        let cur = nums[i]
        if (target >= prev && target <= cur) return i
        prev = cur
    }
    return nums.length
}
console.log(searchInsert([1,3,5,6], 7))