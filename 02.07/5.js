function debounce(fn, timeOut) {
    fn.timer = fn.timer || {};
    console.log(fn.timer);
    if (fn.timer[fn]) {
        clearTimeout(fn.timer[fn]);
    }
    fn.timer[fn] = setTimeout(fn, timeOut);
}

// Expected result

function dateNow() {
    console.log(Date.now());
}

// First case

debounce(dateNow, 1000); // => would be called in 1 second

// Second case

debounce(dateNow, 100); // => canceled
debounce(dateNow, 150); // => canceled
debounce(dateNow, 170); // => would be called only last, previous would be canceled
