let arr = [12, 5, 8, 130, 44];

// const filteredArr = arr.filter(el => el > 10);
const filteredArr = arr.filter(el => {
    if( el > 10) {
        return true;
    } else {
        return false;
    }
});

console.log(filteredArr);