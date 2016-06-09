var express = require('express');
var http = require('http');
var app = express();
app.get('/home', function(request, response){
   response.end('Hello World!'); 
});
//equivalent to http.createServer(app).listen(process.argv[2]);
http.createServer(app).listen(process.argv[2]);