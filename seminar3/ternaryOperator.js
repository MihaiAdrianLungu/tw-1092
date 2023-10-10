const num = 10;

const message = num % 2 === 0 ? 'Numarul este par' : 'Numarul nu este par'

function returnIfIsEvenNumber(num) {
    if (num % 2 === 0) {
        return 'Numarul este par';
    } else {
        return 'Numarul nu este par';
    }
}

console.log(message);
console.log(returnIfIsEvenNumber(num));