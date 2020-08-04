// FoodGenerator 

var express = require ("express");
const bodyParser = require('body-parser');
var app = express () ; 
var request = require ( "request");
var apiCall = require('./apiCall');
const { resolveInclude } = require("ejs");
var router = express.Router();


app.set ( "view engine" , "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

//landing route
app.get("/", function (req,res){
    res.render ( "landing");
});

app.post("/randomize", function (req,res){

    //console.log(req.body.location)

    // the random part 
    const rnd = Math.floor((Math.random() * 49) + 1);

    /*
    ** Name : asyncAPICall
    ** Parameters: None
    ** Returns: None
    ** Description: Just an async container to call apiCall.getResults()
    ** 
    */
    const asyncAPICall = async () => {
        const response = Promise.resolve ( await apiCall.getResults(req.body.location) )

        response.then (result =>{ 
            const rnd = Math.floor((Math.random() * result.length-1) + 1);
            console.log(result[rnd], rnd , )
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
                rating:result[rnd].rating
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

