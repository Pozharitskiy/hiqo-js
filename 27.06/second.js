function difference(array1, array2) {
    let uniqueArray = [];
    const test = array1.filter(element => array2.includes(element));
    uniqueArray = uniqueArray.concat(array1, array2);
    for (let i = 0; i < uniqueArray.length; i++) {
        uniqueArray[i] === test[0] ? uniqueArray.splice(i, 1) : null;
    }
    console.log(uniqueArray);
}
difference([2, 1], [2, 3, 4]); // => [1, 3, 4]