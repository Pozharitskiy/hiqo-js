function difference(array1, array2) {
    let arrayOfDifferences = array1.concat(array2).filter(item =>
        array1.indexOf(item) || array2.indexOf(item)
    );
    return arrayOfDifferences;
}
difference([2, 1], [2, 3, 4]); // => [1, 3, 4]