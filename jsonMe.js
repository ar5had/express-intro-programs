var express = require("express");
var fs = require('fs');
var app = express();
var obj;
app.set('json spaces', 0);
app.get('/books', function(req, res){
    fs.readFile(process.argv[3], 'utf-8',function(err, data){
        if(err)
            console.log("error happened while accesing file!");
        else
            obj = JSON.parse(data);     
    
        res.json(obj);
    });
});
app.listen(process.argv[2]);