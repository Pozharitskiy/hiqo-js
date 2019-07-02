function isEqual(ob1, ob2) {
   /*Of course :)*/
   const string1 = JSON.stringify(ob1);
   const string2 = JSON.stringify(ob2);
   //Let's split two strings and filter new big string
   const twoStrings = (string1 + string2).replace(/[.,\/#!$%\^&\'"\*;:{}=\-_`~()]/g, "");
   const mas = twoStrings.split('');
   //now we have an array from our big string
   console.log(twoStrings);
   const countPairsObject = mas.reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
   }, {});
   //now we have an object (keys:nubmers and letters, values:how much it in our big string)
   console.log(countPairsObject);
   const values = Object.values(countPairsObject);
   //lets check if our object values are only 2 => true
   const isTwo = (el) => {
      return (el === 2);
   }
   (values.every(isTwo) ? console.log(true) : console.log(false))
}

const object1 = {
   a: 1,
   b: {
      c: 3,
      d: {
         e: 5,
      }
   }
};
const object2 = {
   a: 1,
   b: {
      c: 3,
      d: {
         e: 5,
      }
   }
};

isEqual(object1, object2); // => true

