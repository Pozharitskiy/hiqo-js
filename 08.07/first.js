function createObject(obj) {
    for (let key in obj) {
        if (typeof (obj[key]) === 'function') {
            obj[key] = obj[key].bind(obj);
        }
    }
    return obj;
}

// Expected result

const obj1 = {
    testField: 1,
    getTestField: function () {
        console.log(this.testField);
    }
};

const getTestField1 = obj1.getTestField;

getTestField1() // => undefined, context was lost

const obj2 = createObject({
    testField: 1,
    getTestField: function () {
        console.log(this.testField);
    }
});
const getTestField2 = obj2.getTestField;

getTestField2() // => 1, context was binded by createObject function


