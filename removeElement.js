// Given an array nums and a value val, 
// remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, 
// you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. 
// It doesn't matter what you leave beyond the new length.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
    let count = 0;
    while (count < nums.length) {
        if (nums[count] === val) {
            nums.splice(count, 1)
        } else {
            count+=1
        }
    }
    return nums.length
};

