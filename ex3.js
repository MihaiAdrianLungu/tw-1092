function compareWithString(str1, letter) {
    let counter = 0;

    for(let i = 0; i < str1.length; i++) {
        if (str1[i] === letter) 
            counter++;
    }

    return console.log(counter);
}

compareWithString('abcd', 'a');