// FoodGenerator 

var express = require ("express");
var app = express () ; 
var request = require ( "request");
var apiCall = require('./apiCall')
var router = express.Router();


app.set ( "view engine" , "ejs");

//landing route
app.get("/", function (req,res){
    res.render ( "landing");
});

app.post("/randomize", function (req,res){

    promised_response = apiCall.getResults()
    promised_response.then(function(result) {
        console.log(result)
     })
    results = promiseExtractor ( promised_response )
    console.log()
    console.log(results)
    if ( results == undefined)
    {
        res.redirect("/");
        //alert("Uh-oh We had some trouble geting your results. Feel free to try again!");
    }
    else
    {
        res.render("displayResults", {results:business})
    }

});

app.get ( "*", function ( req,res){
    res.render("error");
	//res.send( "Page not found");
});

app.listen (3000 , function () {
    console.log ( "FoodGenerator started");
});

function promiseExtractor ( response )
{
    res = [] 

    response.then(function(result) {
        console.log(result)
     })
    return res 
}