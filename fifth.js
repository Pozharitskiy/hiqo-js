function callWhileStringIsNotEmpty(string, func) {
    let value = string;
    const recursion = (value) => {

        if (value.length === 0) {
            return null;
        } else {
            func(value);
            return recursion(value.slice(0, -1));
        }
    }

    //SHORTER
    /*const recursion = (value) => {
        value.length === 0 ? null : func(value), recursion(value.slice(0, -1));
            } */

    recursion(value);
}
function consoleLog(value) {
    console.log(value);
}

callWhileStringIsNotEmpty('qwerty', consoleLog);


