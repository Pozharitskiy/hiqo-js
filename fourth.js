function callWithFunctionResult(funct1, funct2) {

    let value = funct2();
    let answer = funct1(value);
    console.log(funct1(value));
}

function doubleValue(value) {
    return value * 2;
}
function getFour() {
    return 4;
}