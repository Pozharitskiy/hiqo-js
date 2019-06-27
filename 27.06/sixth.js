function uniq(array) {
    let container = [];
    for (let i = 0; i < array.length; i++) {
        let counter = 0;
        for (let k = 0; k < array.length; k++) {
            if (array[i] === array[k]) {
                counter++;
            }
        }
        if (counter === 1) {
            container.push(array[i]);
        }
    }
    console.log(container);
}
uniq([2, 1, 2, 5, 6, 5, 7]); // => [1, 6, 7]

