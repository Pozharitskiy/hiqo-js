function isValueExists(value) {
    if (value !== null && value !== undefined) {
        console.log(true);
    } else {
        console.log(false);
    }
}

isValueExists(1); // => true
isValueExists(0); // => true
isValueExists('12'); // => true
isValueExists(''); // => true
isValueExists(false); // => true
isValueExists(undefined); // => false
isValueExists(null); // => false
