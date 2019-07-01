function chunk(arr, value) {
    const array1 = arr.slice(0, value);
    const array2 = arr.slice(value, arr.length);
    const container = [];
    container.push(array1, array2);
    console.log(container);
}

chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]
chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]

