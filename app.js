const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var express=require('express');
var app=express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", function(req, res){
    res.redirect('/portfolio');
});
app.get("/portfolio", function(req, res){
    res.render('portfolio');
});
app.get("/work", function(req, res){
    res.render("work");
});
app.get("/resume", function(req, res){
    res.render("resume");
});  

app.listen(process.env.PORT, process.env.IP, function(error, response, body){
    console.log("server started");
});