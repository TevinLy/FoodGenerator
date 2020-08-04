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

    // the random part 
    const rnd = Math.floor((Math.random() * 100) + 1);

    /*
    ** Name : asyncAPICall
    ** Parameters: None
    ** Returns: None
    ** Description: Just an async container to call apiCall.getResults()
    ** 
    */
    const asyncAPICall = async () => {
        const response = Promise.resolve ( await apiCall.getResults() )

        response.then (result =>{

            const business = {
                name:result[rnd].name,
                image:result[rnd].image_url,
                url:result[rnd].url,
                phone:result[rnd].display_phone,
                distance:Math.round (((result[rnd].distance * 0.000621371) + Number.EPSILON) *100) /100,
                price:result[rnd].price,
                categories:result[rnd].categories,
                address:result[rnd].location.display_address,
                review_count:result[rnd].review_count,
                rating:result[rndfe].rating
            }

            if ( result == undefined)
            {
                res.redirect("/");
                //alert("Uh-oh We had some trouble geting your results. Feel free to try again!");
            }
            else
            {
                res.render("displayResults", {business:business})
            }
                });
    }
    asyncAPICall()
});

app.get ( "*", function ( req,res){
    res.render("error");
	//res.send( "Page not found");
});

app.listen (3000 , function () {
    console.log ( "FoodGenerator started");
});

