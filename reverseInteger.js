const reverse = (num) => {
    if (num > 2147483647 || num < -2147483647 ) return 0
    const inputStr = "" + num
    let returnNum;
    if (num >= 0) {
        returnNum = Number(inputStr.split('').reverse().join(''))
        if (returnNum > 2147483647) return 0

    } 
    if (num < 0) {
        const splitNum = inputStr.split('')
        const sign = splitNum.shift()
        returnNum = Number(sign + splitNum.reverse().join(''))
        if (returnNum < -2147483647) return 0
    }
    
    return returnNum
};

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))