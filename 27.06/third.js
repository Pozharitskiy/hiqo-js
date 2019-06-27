function findIndex(container, place) {
    const find = (element, index, array) => {
        const isFunction = typeof (place) === 'function';
        if (isFunction) {
            const searchableElements = container.filter(place);
            if (!searchableElements.length) {
                return;
            }
            const searchableElement = searchableElements[0];
            element === searchableElement ? console.log(index + ' place') : null;
        } else {
            element === place ? console.log(index + ' place') : null
        }
    }
    container.findIndex(find);
}
const numbers = [3, 5, 1, 6, 7];

findIndex(numbers, 1); // => 2

const users = [
    { name: 'User1' },
    { name: 'User2' },
    { name: 'User3' },
];

findIndex(users, (user) => user.name === 'User2'); // => 1


