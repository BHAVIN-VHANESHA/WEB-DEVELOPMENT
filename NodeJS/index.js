//this is the syntax in node js
// const http = require('http'); const hostname = '127.0.0.1'; const port = 3000; const server = http.createServer((req, res) => { res.statusCode = 200; res.setHeader('Content-Type', 'text/plain'); res.end('Hello World'); }); server.listen(port, hostname, () => {
// console.log(`Server running at http://${hostname}:${port}/`); });

//this is the syntax of express framework of node js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/p", (req, res) => {
  res.send("hi i am bahvin");
});
app.get("/about", (req, res) => {
  res.json({ programmer: 22, develpoer: 22 });
});
app.get("/home", (req, res) => {
  res.send("i live in navsari");
});
app.get("/edu", (req, res) => {
  res.send("i study at BVM in VVN, Anand");
});
app.get("/ambition", (req, res) => {
  res.send("i want to become a trillonear business man");
});
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}/v2`);
});
 