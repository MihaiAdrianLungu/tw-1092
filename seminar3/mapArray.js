let arr = [12, 5, 8, 130, 44];
let forEachArr = [];

let mappedArr2 = arr.forEach(el => {
 forEachArr.push(el * 2);
})

let mappedArr = arr.map((el, index) => {
    return el * index;
})

console.log(forEachArr);
console.log(mappedArr);
