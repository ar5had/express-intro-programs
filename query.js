var express = require("express");
var app = express();

app.get('/search', function(req, res){
    var str = req.query;
    res.send(JSON.stringify(str));
});

app.listen(process.argv[2]);