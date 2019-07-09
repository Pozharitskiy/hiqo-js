function uniq(array) {
    const uniqArray = array.filter(item => array.indexOf(item) === array.lastIndexOf(item)
    );
    return uniqArray;
}

uniq([2, 1, 2, 5, 6, 5, 7]); // => [1, 6, 7]

