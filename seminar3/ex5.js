function calculate(factor, ...args) {
    return args.reduce((acc, el) => acc + el) * factor;
}

console.log(calculate(10, 1, 2, 3));