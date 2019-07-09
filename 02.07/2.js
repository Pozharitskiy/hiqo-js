function callMaxTimes(numberOfTimes, func) {
    let counter = numberOfTimes;
    return () => {
        if (counter > 0) {
            func();
        }
        counter--;
    }
}

function consoleLog() {
    console.log("abc");
}

const callConsoleLog = callMaxTimes(3, consoleLog);

callConsoleLog(); // => 'abc'
callConsoleLog(); // => 'abc'
callConsoleLog(); // => 'abc'
callConsoleLog(); // => nothing happens
