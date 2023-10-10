function sum(factor, ...nums) {
    const sum = nums.reduce((acc, el) => acc + el);
    return;
    console.log(sum * factor)
}

sum(1,2,3,4)