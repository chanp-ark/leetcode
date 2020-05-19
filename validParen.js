// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

const isValid = (str) => {
    if (!str) return true
    if (str.length %2 === 1) return false
    
    const parenPairs = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    
    let targetParen;
    let count = 0;
    let trackStr = ""
    
    while(count < str.length) {
        let curParen = str[count]
        targetParen = parenPairs[curParen]
        
        if (targetParen) trackStr += curParen
        
        if (targetParen === undefined) {
            if (curParen !== parenPairs[trackStr[trackStr.length-1]]) return false
            trackStr = trackStr.slice(0, trackStr.length-1)
        }
        count +=1
    }
    return trackStr.length > 0 ? false : true
};



console.log("should be false: ", isValid("(("))
console.log("should be true: ", isValid("()"))
console.log("should be true: ", isValid("()[]{}"))
console.log("should be false: ", isValid("(]"))
console.log("should be false: ", isValid("([)]"))
console.log("should be true: ", isValid("{[]}"))
