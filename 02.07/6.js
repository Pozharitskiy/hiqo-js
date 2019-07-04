function memoize(fn) {
    let cache = {};
    return (...args) => {
        let n = args;
        if (n in cache) {
            console.log('I have done it by noon', fn(...args));
            return fn(...args);
        } else {
            console.log('Calculating', fn(...args));
            let result = (fn(...args));
            cache[n] = result;
            return result;
        }
    }
}

// Expected result

function summ(a, b, c) {
    return a + b + c;
}

const memoizedSumm = memoize(summ);

memoizedSumm(1, 2, 3); // => function summ was called, result 6
memoizedSumm(1, 2, 3); // => function summ was NOT called, result 6 was remembered for arguments 1, 2, 3 and returned
memoizedSumm(4, 2, 3); // => function summ was called, result 9
memoizedSumm(4, 2, 3); // => function summ was NOT called, result 9 was remembered for arguments 4, 2, 3 and returned
