//if-else
if (condition) {
    //code
}else{
    //code
}
example
var year = 2020;
if (year % 4 === 0) {
    if (year % 100 === 0) console.log("it is not a leap year");
    else console.log("it is leap year");
}
else console.log("it is not a leap year");



//ternary operator(the only operator which takes three operands)
var age = 17;
if (age > 18) {
    console.log("u can vote");
}else{
    console.log("u cannot vote");
}

//in ternary
var age = 17;
(age >= 18) ? "u can vote" : "u cannot vote";




//switch case
var pi = 3.14, r = 4, l = 5, b = 6;
var area = 'circle';
switch (area) {
    case 'circle':
        console.log(pi*r**2);
        break;
    case 'rectangle':
        console.log(l*b);
        break;
    case 'triangle':
        console.log((l*b)/2);
        break;

    default: console.log("enter valdi data");
    break;
}






//while loop
var n = 1;
while (n <= 6) {
    console.log(n);
    n++;
}






//do-while loop
var n = 1;
do {
   console.log(n); 
   n++;
} while (n <= 6);





//for loop
for (let index = 0; index < array.length; index++) {
    const element = array[index];  
}




//for-in loop
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
    }
}





//for-of loop
for (const iterator of object) {

}






//foreach loop
array.forEach(element => {
    
});