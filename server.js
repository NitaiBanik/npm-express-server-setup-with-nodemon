//jshint esversion:6

const express = require("express");

var app = express();

app.get("/", function(req, res){
  res.send("<p> <a href='http://localhost:3000/contact'>Contact me</a>  <a href='http://localhost:3000/about'>about</a></p>");
});

app.get("/contact", function(req, res){
  res.send("<h1>nitaibanik29 </h1>");
});

app.get("/about", function(req, res){
  res.send("<h1>A software Engineer broh!</h1>");
});

app.listen(3000, function(){
  console.log("Server strted on port 3000");
});
