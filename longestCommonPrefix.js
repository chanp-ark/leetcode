// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// All given inputs are in lowercase letters a-z.

const longestCommonPrefix = arr => {
    
    if (arr.length < 1 ) return ""
    
    if (arr.length === 1) return arr[0]
    
    let common = arr[0][0]
    
    for (let i = 0; i < arr.length; i+=1) {
        const str = arr[i]
        if (!str ) return ""
        for (let j = 1; j < arr.length; j+=1) {
            const compare = arr[j]
            if (common[0] !== compare[0]) return ""
            let count = 0
            while (count < compare.length) {
                if (str[count] !== compare[count] && j === arr.length-1) return common.slice(-count)
                common += compare[count]
                count ++
            }
            common = common.slice(-count)
        }
    }
    return common
    
};

console.log("should be 'fl' : ", longestCommonPrefix(["flower","flow","flight"]))
console.log("should be 'c' : ", longestCommonPrefix(["c", "c"]))
console.log("should be 'chanypark' : ", longestCommonPrefix(["chanypark", "chanypark"]))
console.log("should be ' ' : ", longestCommonPrefix(["baab","bacb","b","cbc"]))
console.log("should be 'aa' : ", longestCommonPrefix(["aacc","aa","aa","aa","aaca"]))