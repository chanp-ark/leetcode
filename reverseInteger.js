const reverse = (num) => {
    // check if num is negative
    const isNeg = num < 0 ? true : false
    // define reversed to be the abs value of num, stringify, split, reverse, join
    const reversed = Number(Math.abs(num).toString().split('').reverse().join(''))
    // if reversed is greater than the limit, return 0
    if (reversed > 2147483647) return 0
    // if num is negative, return reversed times negative 1, else return reversed
    return isNeg ? reversed * -1 : reversed
};

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))