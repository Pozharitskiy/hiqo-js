function fromPairs(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        obj[array[i][0]] = array[i][1];
    }
    console.log(obj);
}

fromPairs([['a', 1], ['b', 2]]); // => { 'a': 1, 'b': 2 }
