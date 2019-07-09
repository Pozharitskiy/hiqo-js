function isEqual(ob1, ob2) {
   /*Of course :)*/
   const string1 = JSON.stringify(ob1).replace(/[.,\/#!$%\^&\'"\*;:{}=\-_`~()]/g, "");
   const string2 = JSON.stringify(ob2).replace(/[.,\/#!$%\^&\'"\*;:{}=\-_`~()]/g, "");
   //Let's split two strings and filter new big string
   const twoStrings = (string1 + string2);
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
   //checking different orders and nesting levels
   if (values.every(isTwo)) {
      console.log(true)
   } else {
      if (string1 === string2) {
         console.log(true)
      } else {
         console.log(false);
      }
   }

}

const object1 = {
   a: 1,
   b: {
      c: {
         e: 5,
      },
      d: 3,
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

