const findWord = (text, word) => {
    const foundWord = text.indexOf(word);

    if(foundWord === -1) {
        console.log(`Nu am gasit cuvantul ${word}`);
    } else {
        console.log(`Am gasit cuvantul ${word} la pozitia ${foundWord}`)
    }
}

findWord('I love JavaScript', 'JavaScript');