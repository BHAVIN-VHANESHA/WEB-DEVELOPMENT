//making an object
person = {
    name : "bhavin",
    dob : "15-04-2001",
    favcolour : "blue",
    programmer : true
}
person2 = {
    name : "tikal",
    dob : "15-04-2001",
    favcolour : "blue",
    programmer : true
}
// console.log(person2);
// console.log(person);

//exporting to first.js
module.exports = {person, person2};


//module raper function (imp)
// (function(exports, require, module, __filename, __dirname){})
// console.log(exports, require, module, __filename, __dirname);   