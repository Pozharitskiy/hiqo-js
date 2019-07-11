function Dog(id, name) {
    this.id = id;
    this.name = name;
}

function Collection(constructor) {
    this.collectionArray = [];
    this.constructor = constructor;
}

Collection.prototype.readAll = function () {
    return this.collectionArray;
};

Collection.prototype.add = function (...args) {
    this.collectionArray.push(Object.seal(new this.constructor(...args)));
    return this.collectionArray;
};

Collection.prototype.get = function (foo) {
    const gotItem = this.collectionArray.find(foo);
    const that = this;
    return {
        read() {
            return gotItem;
        },
        remove() {
            that.collectionArray = that.collectionArray.filter(item => item !== gotItem);
        },
        update(updateFoo) {
            updateFoo(gotItem);
            return this;
        },
    };
};

Collection.prototype.getBy = function (foo) {
    const gotItems = this.collectionArray.filter(foo);
    return {
        read() {
            return gotItems;
        },
        remove() {
            this.gotItems = this.gotItems.filter(item => !gotItems.includes(item));
            return this.gotItems;
        },
        update(updateFoo) {
            gotItems.forEach((item, index) => {
                updateFoo(item, index);
            });
            return this;
        },
    };
};

/*
  Collection methods:
   
  1) readAll - returns array of all collection items
  2) add - creates new collection item using passed to Collection constructor, dogsCollection.add(1, 'Test name1') === new Dog(1, 'Test name1') (see example below)
  3) get - gets first matched collection item and allows to operate on it using update, remove, read methods (see example below)
  4) update - allows to update directly collection item, doesn't support initial model's extension (see example below)
  5) remove - removes item from collection
  6) read - returns collection item
*/

// Expected result

const dogsCollection = new Collection(Dog);
dogsCollection.readAll(); // => []
dogsCollection.add(1, 'Test name1'); // Creates instance of Dog
dogsCollection.add(2, 'Test name2'); // Creates instance of Dog
dogsCollection.add(3, 'Test name3'); // Creates instance of Dog
dogsCollection.readAll();
const dogsCollectionItem = dogsCollection.get(dog => dog.id === 1);
dogsCollectionItem
    .update((dog) => {
        dog.name = 'Updated test name 1';
    })
    .update((dog) => {
        dog.someNewField = 'Some new field';
    });
const dog1 = dogsCollectionItem.read();
const dogsCollectionItems = dogsCollection.getBy((dog) => dog.id < 3);
dogsCollectionItems.update((dog, index) => {
    dog.name = `Updated test name ${index}`;
});
const dogs = dogsCollectionItems.read();
dogsCollectionItem.remove();