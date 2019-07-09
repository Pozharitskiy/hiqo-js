function Collection(constructor) {
    this.collectionArray = [];
    let gotItem, newArr;
    this.readAll = function () {
        console.log(this.collectionArray);
        return this.collectionArray;
    }

    this.add = function (itemId, itemName) {
        this.collectionArray.push(Object.seal(new constructor(itemId, itemName)));
    }

    this.get = function (foo) {
        this.gotItem = this.collectionArray.find(foo);
        console.log(this.gotItem);

        this.update = function (updateFunc) {
            updateFunc(this.gotItem);
            console.log(this.gotItem);
            return this;
        }

        this.remove = function () {
            let positionOfItem = this.collectionArray.indexOf(this.gotItem);

            this.collectionArray.splice(0, ++positionOfItem);
            console.log(this.collectionArray)
        }

        this.read = function () {
            console.log(this.gotItem)
        }

        return this;
    }

    this.getBy = function (foo) {
        this.newArr = this.collectionArray.filter(foo);
        console.log(this.newArr);

        this.update = function (change) {
            this.newArr.forEach(change);
            return this.newArr;
        }
        this.read = function () {
            console.log(this.newArr);
        }
        return this;
    }

}

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

function Dog(id, name) {
    this.id = id;
    this.name = name;
}

const dogsCollection = new Collection(Dog);

dogsCollection.readAll(); // => []

dogsCollection.add(1, 'Test name1'); // Creates instance of Dog
dogsCollection.add(2, 'Test name2'); // Creates instance of Dog
dogsCollection.add(3, 'Test name3'); // Creates instance of Dog

dogsCollection.readAll(); // => array [Dog instance(id = 1, name = 'Test name1'), Dog instance(id = 2, name = 'Test name2'), Dog instance(id = 3, name = 'Test name3')]

const dogsCollectionItem = dogsCollection.get((dog) => dog.id === 1);

dogsCollectionItem
    .update((dog) => {
        dog.name = 'Updated test name 1'; // => Dog instance(id = 1, name = 'Updated test name 1')
    })
    .update((dog) => {
        dog.someNewField = 'Some new field'; // => nothing changed, collection items don't support initial model's extension (HINT: Object.seal should be used)
    });

const dog1 = dogsCollectionItem.read(); // => returns Dog instance object(id = 1, name = 'Test name1')

const dogsCollectionItems = dogsCollection.getBy((dog) => dog.id < 3);

dogsCollectionItems.update((dog, index) => { // => callback iterates through all matches collection's items ([Dog instance(id = 1, name = 'Test name1'), Dog instance(id = 2, name = 'Test name2')])
    dog.name = `Updated test name ${index}`;
})

const dogs = dogsCollectionItems.read(); // => array [Dog instance(id = 1, name = 'Test name1'), Dog instance(id = 2, name = 'Test name2')]

dogsCollectionItem.remove(); // => removes Dog instance object(id = 1, name = 'Test name1') from collection
