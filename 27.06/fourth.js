function flattenDeep(array) {
    // TODO: implement function
    const lifehack = array.toString().split(",").map(Number);
    console.log(lifehack);
}

flattenDeep([1, [2, [3, [4]], 5]]); // => [1, 2, 3, 4, 5]

/*I thought I can do it like as shown below, but... */

// const mas=[];

//   for (let i=0;i<array.length;i++){

//     if (typeof(array[i])==='object'){
//       let buf=array[i];
//       mas.push(buf[0]);
//       console.log(buf);
//     } 

//     else mas.push(array[i]);

//   }

//   console.log(mas);
//   console.log(array);
// 	// TODO: implement function