const numArray = [10, 20, 30, 40, 50, 60];

function averageNum(numbers) {
    let numSum = numArray.reduce((pValue, cValue) => pValue + cValue)
    return numSum / numbers.length
}

console.log(averageNum(numArray))