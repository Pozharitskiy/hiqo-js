curry = function (fn) {
    let operationsLeft = fn.length
    return function f1(...args) {
        if (args.length >= operationsLeft) {
            return fn(...args)
        } else {
            return function f2(...moreArgs) {
                let newArgs = args.concat(moreArgs)
                return f1(...newArgs)
            }
        }
    }
}

/*BIND USAGE*/
/*
!!! TIP:arrow functions lost context =( !!!
function curry(fn) {
  return function binding() {
    return (arguments.length < fn.length) ?
      binding.bind(this, ...arguments) : fn.call(this, ...arguments);
  }
}
*/

function summ1(a, b, c) {
    return a + b + c;
}

const curriedSumm1 = curry(summ1);

curriedSumm1(1)(2)(3); // => 6

function summ2(a, b, c, d, e) {
    return a + b + c + d + e;
}

const curriedSumm2 = curry(summ2);

curriedSumm2(1)(2)(3)(4)(5); // => 15