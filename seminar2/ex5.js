const calculateAvg = (arr) => {
    let sum = 0;

    for (let el of arr) {
        sum += el;
    }

    return console.log(sum / arr.length);
}

calculateAvg([1,2,3]);