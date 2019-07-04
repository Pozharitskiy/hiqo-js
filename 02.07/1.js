function rememberResult(initialValue) {
    let value = initialValue;
    return (func) => {
        return value = func(value);
    };
}

function doubleValue(value) {
    return 2 * value;
}

const callWithRememberedResult = rememberResult(2);

callWithRememberedResult(doubleValue); // => 4
callWithRememberedResult(doubleValue); // => 8
callWithRememberedResult(doubleValue); // => 16
console.log(callWithRememberedResult(doubleValue)); 