// FoodGenerator 

var express = require ("express");
var app = express () ; 
var request = require ( "request");
var apiCall = require('./apiCall');
const { resolveInclude } = require("ejs");
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
        for ( business of result.data.businesses)
        {
            res.push( {
                name:business.name,
                image:business.image_url,
                url:business.url,
                phone:business.display_phone,
                distance:Math.round (((business.distance * 0.000621371) + Number.EPSILON) *100) /100,
                price:business.price,
                categories:business.categories,
                address:business.location.display_address,
                review_count:business.review_count,
                rating:business.rating
              } )
        }
     })
    return res 
}