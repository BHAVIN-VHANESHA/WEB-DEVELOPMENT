//NaN is a property of the global object.


//isNaN() is used to check whether it is number or not
var number = 576845478;
console.log(isNaN(number))
var name = "bhavin";
console.log(isNaN(name));

console.log(typeof(isNaN));

console.log(NaN === NaN);
console.log(Number.NaN === NaN);
console.log(isNaN(NaN));
console.log(isNaN(Number.NaN));
console.log(isNaN(Number.isNaN(NaN)));
console.log(Number.isNaN(NaN));
