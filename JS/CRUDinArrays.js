// push()
let names = ["bhavin", "kevin"];

//unshift()
// names.unshift('hi');
// names.push("students", "from", 'navsari');

//pop()
// names.pop('navsari');

//shift()
// names.shift();
// console.log(names);
// console.log(names.length);

//all the CRUD operations can be perform by splice()
let n = names.splice(names.length, 0, "navsari");
// console.log(names);
// console.log(n);//empty array. And if we delete any element from an array it shows in the return value in array

//update values in array
// let indexname = names.indexOf('bhavin');
// let indexname = names.indexOf("kevin");
// if (indexname != -1) {
//   // let updatename = names.splice(indexname,1,'Bhavin')
//   let updatename = names.splice(indexname, 1); //deleting element
//   console.log(names);
//   // console.log(updatename);//it shows the deleted element in array
// } else {
//   console.log("no data found");
// }
// let infinit = names.splice(1,Infinity);
// console.log(infinit);
// console.log(names);


//map()  so basically map() return an original array and new array with result 
// let newarray = [1,2,3,4,5,6,7,8,9,10];
// let maap = newarray.map((element,index,array) =>{
//     return element > 5;
// })//.reduce().filter()
// console.log(newarray);//no chanege in array
// console.log(maap);//result returning in boolean vlaues




//reduce() use to convert 3D and 2D array into 1D array
let ar = [2,3,4,6,8];
// let red = ar.reduce((accumulator,element)=>{
//     return accumulator += element;
// });
// console.log(red);
let fun = ar.map((element) =>{
    return element * 2;
}).filter((element) =>{
    return element > 10;
}).reduce((accumulator,element) =>{
    return accumulator += element;
});  // after the curly braces initial value can be added by (,value)(,5) 
console.log(fun);