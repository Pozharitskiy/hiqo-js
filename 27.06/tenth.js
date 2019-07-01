function isEqual(ob1, ob2) {
   /*Of course :)*/
   const string1 = JSON.stringify(ob1);
   const string2 = JSON.stringify(ob2);
   const twoStrings = (string1 + string2).replace(/[.,\/#!$%\^&\'"\*;:{}=\-_`~()]/g, "");
   const mas = twoStrings.split('');
   console.log(twoStrings);
   let test = mas.reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
   }, {});

   console.log(test);
   var keys = Object.keys(test);
   var dupe = false;
   const values = Object.values(test);
   const isTwo = (el) => {
      return (el === 2);
   }
   (values.every(isTwo) ? console.log(true) : console.log(false))
}
