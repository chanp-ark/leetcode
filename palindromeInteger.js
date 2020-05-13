const palindromeInteger = num => {
    if (num < 0) return false
    if (num < 10) return true
    const numToStr = num.toString()
    const mid = Math.floor(numToStr.length/2)

    if (numToStr.length %2 === 0 && num %11 === 0) {
        if (numToStr[0] === numToStr[numToStr.length-1]) return true
       
    } else {
        const latter = numToStr.slice(mid+1).split('').reverse().join('')
        if (numToStr.slice(0, mid) === latter) return true
    }
    return false
}


console.log("should be true: ", palindromeInteger(1221))
console.log("should be false: ", palindromeInteger(-121))
console.log("should be false for 10: ", palindromeInteger(10))
console.log("should be true: ", palindromeInteger(95859))
console.log("should be false: ", palindromeInteger(1133))
console.log("should be false: ", palindromeInteger(123123))