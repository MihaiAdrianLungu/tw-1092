function testVariables() {
    if (true) {
        var var1 = 'var';
        let var2 = 'let';
        const var3 = 'const';

        console.log('var: ' + var1);
        console.log('let: ' + var2);
        console.log('const: ' + var3); 
    }

    console.log('var: ' + var1);
    // console.log('let: ' + var2);
    // console.log('const: ' + var3); 
}

// console.log(var1);

// testVariables();

// const myConst = 'a'

// myConst = 'ab'

// const arr = [1,2,3]

// arr = [1,2,3,4]

// console.log(arr)

// let obj = {
//     name: 'Object'
// }

// obj.description = 'text'
// obj = {
//     name: 'Test'
// }

// console.log(obj)


let arr = [1,2,3,4]

console.log(arr.length)
console.log('string'.length)