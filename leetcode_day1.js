//Write a function createHelloWorld. It should return a new function that always returns "Hello World".


//solution
var createHelloWorld = function() {
    return function() {
        return "Hello World";
    }
    //return () => "Hello World";
};

let helloworld = createHelloWorld();
console.log(helloworld());