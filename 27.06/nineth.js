function groupBy(array, foo) {
    var result = array.reduce((elem, currentValue) => {
        (elem[foo(currentValue)] = elem[foo(currentValue)] || []).push(currentValue);
        return elem;
    }, {});

    console.log(result);
    return result;
}


groupBy(['one', 'two', 'three'], (element) => element.length);

