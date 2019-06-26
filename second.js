function summAdvanced() {
    let currentSum = 0;
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        if (!isNaN(+arguments[i])) {
            currentSum += +arguments[i];
        } else if (typeof (arguments[i]) === "function") {
            let executeFunc = arguments[i]();
            currentSum += executeFunc;
        }
    }
    console.log(currentSum);
}
summAdvanced('abc', 1, '2', getTen, getTenString, getRandomNumber); // => 1 + 2 + 10 + 10 + randow value, 'abc' should be ignored. Result should have type Number

function getRandomNumber() {
    return Math.random();
}

function getTen() {
    return 10;
}

function getTenString() {
    return '10';
}