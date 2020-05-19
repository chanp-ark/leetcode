// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// All given inputs are in lowercase letters a-z.

const longestCommonPrefix = strings => {
    
    if (strings.length < 1 ) return ""
    
    if (strings.length === 1) return strings[0]
    
    const prefixs = {};
    
    let init = strings[0][0]
    
    
    for (let i = 0; i < strings.length; i += 1) {
        const string = strings[i];
        if (string[0] !== init || !string) return ""
        for (let j = 0; j < string.length; j += 1) {
        const substring = string.slice(0, j + 1);
        if (prefixs[substring] === undefined) prefixs[substring] = 1;
        else prefixs[substring] += 1;
        }
    }
    console.log(prefixs)
    
    let count = 0;
    let keyLength = 0;
    let returnPre;
    for (let key in prefixs) {
       if (prefixs[key] >= count && key.length > keyLength) {
            count = prefixs[key]
           keyLength = key.length
           returnPre = key
       }
    }
    return returnPre
};

console.log("should be 'c' : ", longestCommonPrefix(["", ""]))
// console.log("should be 'fl' : ", longestCommonPrefix(["flower","flow","flight"]))
// console.log("should be 'c' : ", longestCommonPrefix(["c", "c"]))
// console.log("should be 'chanypark' : ", longestCommonPrefix(["chanypark", "chanypark"]))
// console.log("should be ' ' : ", longestCommonPrefix(["baab","bacb","b","cbc"]))
// console.log("should be 'aa' : ", longestCommonPrefix(["aacc","aa","aa","aa","aaca"]))