const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
var path    = require("path");
const app = new express();

const hostname = '127.0.0.1';
const port = 5500;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.write(html);
//   res.end();
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/test.html'));
});
// app.post('/', function(req, res){
//   console.log(res);
//   console.log(req);
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.post('/', (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});

app.listen(port, hostname,() => {
  console.log(`Server running at http://${hostname}:${port}/`);
  
});


// const urlParams = new URLSearchParams(queryString);

// var userId = getUrlParam('userid','Empty');
// console.log(`userID is: ${userID}`);