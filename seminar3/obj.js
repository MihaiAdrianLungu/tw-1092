const student = {
    firstName: 'Adrian',
    lastName: 'Lungu',
    yearsOld: 24,
    logFirstName: function() {
        console.log(this.firstName);
    }
}

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));