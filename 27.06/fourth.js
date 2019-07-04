function flattenDeep(arr1) {
    return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

flattenDeep([1, [2, [3, [4]], 5]]);  // => [1, 2, 3, 4, 5]