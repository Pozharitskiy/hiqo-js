function groupBy(array, foo) {
    const map = new Map();
    array.forEach((item) => {
        const key = foo(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
}

/*idk how to solve that for myself, i just took that code from the web*/

groupBy(['one', 'two', 'three'], (element) => element.length);

