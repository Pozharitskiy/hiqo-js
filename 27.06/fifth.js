function fromPairs(array) {
    return array.reduce((current, item) => {
        const prop = item[0];
        const value = item[1];
        current[prop] = value;
        return current;
    }, {});
}

fromPairs([['a', 1], ['b', 2]]); // => { 'a': 1, 'b': 2 }
