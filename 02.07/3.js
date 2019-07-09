function partial(func, greeting) {
    return function (name) {
        return func(greeting, name);
    }
}

function greet(greeting, name) {
    return `${greeting} ${name}`;
}

const sayHelloTo = partial(greet, "Hello");

sayHelloTo("everyone"); // => 'Hello everyone'