// Return the index of the first occurrence of needle in haystack, 
// or -1 if needle is not part of haystack.

// return 0 when needle is an empty string. 
// This is consistent to C's strstr() and Java's indexOf()

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const strStr = (haystack, needle) => {
    if (!needle) return 0
    let end = needle.length
    for (let i = 0; i < haystack.length; i++) {
        const check = haystack.slice(i, i+end)
        if (check === needle) return i
        if (check.length !== needle.length) return -1

    }
    return -1
}

// one liner, works for array or string
const strStr1 = (haystack, needle) => haystack.indexOf(needle);
