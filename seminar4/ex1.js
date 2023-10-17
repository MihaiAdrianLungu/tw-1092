function increaseSalary(arr, factor) {
     try {
        if (!Array.isArray(arr)) {
            throw new Error('Not an array');
        }

        if (typeof factor !== 'number') {
            throw new Error('Not a number');
        }

        const newArr = arr.map(el => el + (el * factor / 100));

        return newArr;
     } catch (error) {
        console.log(error.message);
     }
}

const arr = [1000, 2000, 3000];
const procent = 10;
const result = increaseSalary(arr, procent);
console.log(result);