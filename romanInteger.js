const romanToInt = (str) => {
    const dict = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let sum = 0;
    for (let i = 0; i < str.length; i += 1) {
        const cur = str[i]
        const next = str[i+1]        
        if (dict[cur] < dict[next]) sum -= dict[cur]
        else sum += dict[cur]
        
    }
    return sum
};

console.log("should be 3", romanToInt("III"))
console.log("should be 4", romanToInt("IV"))
console.log("should be 9", romanToInt("IX"))
console.log("should be 58", romanToInt("LVIII"))
console.log("should be 1994", romanToInt("MCMXCIV"))

