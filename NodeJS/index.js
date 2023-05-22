//this is the syntax in node js  
// const http = require('http'); const hostname = '127.0.0.1'; const port = 3000; const server = http.createServer((req, res) => { res.statusCode = 200; res.setHeader('Content-Type', 'text/plain'); res.end('Hello World'); }); server.listen(port, hostname, () => { 
    // console.log(`Server running at http://${hostname}:${port}/`); });


//this is the syntax of express framework of node js 
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send('hello world')
})
app.get('/p', (req,res) => {
    res.send('hi i am bahvin')
})
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
})