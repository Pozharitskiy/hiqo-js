function find(array, foo) {
    console.log(array.filter(foo));
}

const users = [
    { name: 'User1', age: 22 },
    { name: 'User2', age: 23 },
    { name: 'User3', age: 20 },
];

find(users, (user) => user.age < 23); // => [{ name: 'User1', age: 22 }, { name: 'User3', age: 20 }]