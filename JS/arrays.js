// multiple valuse of same datatype can be stored in arrays
// but in javascript we can store multiple different types of datatypes
// in arrays

let array = [1, 2, "bhavin", 9.6, 'b'];
// console.log(array.length);
// console.log(array.length-1);
// console.log(array[0]);
// console.log(array[3]);


//for in loop (gives the index number)
// for (let elements in array) {
//     console.log(elements);
// }



//for of loop (gives the index value)
// for (let elememts of array) {
//     console.log(elememts);
// }



//foreach loop
// array.forEach(function(element, index, array) {
//     console.log(element + "   " + "index:" + index + "   " + array);
// });


//fat arrow foreach loop
// array.forEach((element, index, array) => {
//     console.log(element + "   " + "index:" + index + "   " + array);
// });




//searching and filter in array
// let index = array.indexOf(9.6); 
// console.log(index);

// let a = array.lastIndexOf(9.6);
// console.log(a);

// let i = array.includes("bhavin",2);
// console.log(i);

// let f = array.find((elememt) => {
//     return elememt > 2;
// });
// console.log(f);
// let f = array.findIndex((elememt) => {
//     return elememt == 2;
// });
// console.log(f);



//sort data in ascending array
//console.log(array.sort());