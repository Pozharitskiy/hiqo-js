function memoize(fn) {
    const сache = {};
    return (...args) => {
        let key = JSON.stringify(args);
        if (!сache[fn]) {
            сache[fn] = {};
        }
        if (!сache[fn][key]) {
            сache[fn][key] = fn(...args);
            console.log('computing'); // just to make sure memoization works
        }
        console.log(сache);
        return сache[fn][key];
    };
}

// Expected result

