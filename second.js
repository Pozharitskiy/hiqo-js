function summAdvanced() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const arg = arguments[i];
        const isFunction = typeof (arg) === 'function';
        const argValue = isFunction ? arg() : arg;
        const argNumberValue = Number(argValue);
        if (argNumberValue) {
            sum += argNumberValue;
        }
    }
    console.log(sum);
}
summAdvanced('abc', 1, '2', getTen, getTenString, getRandomNumber);
function getRandomNumber() {
    return Math.random();
}

function getTen() {
    return 10;
}

function getTenString() {
    return '10';
}