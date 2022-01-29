const http = require('http');
const express = require('express');
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
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(port, hostname,() => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

