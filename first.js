function summ() {
    let currentSum = 0;
    for (let i = 0; i < arguments.length - 1; i++) {
        currentSum += +arguments[i];
    }
    console.log(currentSum);
}
summ(1, '2', '3', 5, 'abc'); // => Number 11, 'abc' was ignored


