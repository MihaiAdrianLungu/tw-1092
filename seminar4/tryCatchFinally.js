function testFunction(a, b) {
    try {
        if (a % b !== 0) {
            throw new Error('Error');
        }

        return a / b;
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log('Finished the execution');
    }
}

const result = testFunction(4, 3);
console.log(result);