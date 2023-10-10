function calculate(arr, divisor) {
    const filteredArr = arr.filter(el => el % divisor === 0);

    return filteredArr.reduce((acc, el) => acc + el);
}

console.log(calculate([1,2,3,4], 2));