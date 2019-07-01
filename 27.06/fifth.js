function fromPairs(array) {
    return array.reduce((current, item) => {
        let prop = item[0];
        let value = item[1];
        current[prop] = value;
        return current;
    }, {});
}

fromPairs([['a', 1], ['b', 2]]); // => { 'a': 1, 'b': 2 }
