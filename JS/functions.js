// function add(a,b) {
//     console.log(a+b);    
// }
// add(10,5);
// var exp = add(15,5);
// exp;


//return
// function add(a,b) {
//     return a+b;    
// }
// add(10,5);
// var exp = add(15,5);
// console.log(exp);/





//anonymous function
// function add(a,b) {
//     return function(){

//     };    
//}
var add = function(a,b){
    return a+b;
}
console.log(add(5,5));





//fat arrow function
//while using this function do not call the function 
//before its define. call after the body
const sum = () => {
    //let a = 5; b = 6;
    //return a+b;
    //return `${a+b}`;
// if there is code of one line no need toc write return
    `${a+b}`;
}
console.log(sum());