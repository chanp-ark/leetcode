const twoSum = (nums, target) => {
    const track = {};
    for (let i = 0; i < nums.length; i += 1) {
        const current = nums[i];
        const findNum = target - current;
        if (track[findNum] !== undefined) return [track[current], track[findNum]];
        track[current] = i;
    }
};