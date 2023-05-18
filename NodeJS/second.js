//making an object
person = {
    name : "bhavin",
    dob : "15-04-2001",
    favcolour : "blue",
    programmer : true
}

//exporting to first.js
module.exports = person;

//module raper function (imp)
(function(exports, require, module, __filename, __dirname){})
console.log(exports, require, module, __filename, __dirname);