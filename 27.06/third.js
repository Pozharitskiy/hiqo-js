function findIndex(...rest) {
    const container = rest[0];
    const criterion = rest[1];
    const isFunction = (typeof criterion === 'function');
    if (isFunction) {
        return container.map(criterion).indexOf(true);
    }
    return container.indexOf(criterion);
}

const numbers = [3, 5, 1, 6, 7];

findIndex(numbers, 1); // => 2

const users = [
    { name: 'User1' },
    { name: 'User2' },
    { name: 'User3' },
];

findIndex(users, (user) => user.name === 'User2'); // => 1