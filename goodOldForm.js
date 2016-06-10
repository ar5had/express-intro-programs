var express = require("express");
var bodyparser = require("body-parser");
var app = express();
// adding middleware to parse form data that is in x-www-form-urlencoded form
app.use(bodyparser.urlencoded({extended: false}));
app.post('/form', function(req, res){
   res.end(req.body.str.split("").reverse().join(""));
});
app.listen(process.argv[2]);