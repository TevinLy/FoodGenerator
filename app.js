// FoodGenerator 

var express = require ("express");
var app = express () ; 
var request = require ( "request");

app.set ( "view engine" , "ejs");


//landing route
app.get("/", function (req,res){
    res.render ( "landing");
});





app.listen (3000 , function () {
    console.log ( "FoodGenerator started");
});

