const { error } = require('console');
const fs = require('fs');

const a = fs.readFile('file.txt', 'utf8', (error, data) =>{
    console.log(error,data);
})

const b = fs.readFileSync('file.txt');
console.log(b);

console.log('file readed');