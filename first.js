function summ() {
    let currentSum = 0;
    for (let i = 0; i < arguments.length; i++) {
        +arguments[i] ? currentSum += +arguments[i] : null;
    }
    console.log(currentSum);
}
summ(1, '2', '3', 5, 'abc'); // => Number 11, 'abc' was ignored


