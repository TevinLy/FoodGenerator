// FoodGenerator 

var express = require ("express");
const bodyParser = require('body-parser');
var app = express () ; 
var request = require ( "request");
var apiCall = require('./apiCall');
var router = express.Router();

app.set ( "view engine" , "ejs");
app.use(bodyParser.urlencoded({ extended: true }));


//landing route
app.get("/", function (req,res){
    res.render ( "landing");
});


app.post("/randomize", function (req,res){

    //console.log(req.body.location)

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
            if ( result == undefined )
            {
                res.redirect("/");
                //alert("Uh-oh We had some trouble geting your results. Feel free to try again!");
            }
            else
            {
                if ( result.total == 0)
                {
                    // no results for that given location
                    res.redirect("/");
                }
                else {

                    const rnd = Math.floor((Math.random() * result.businesses.length-1) + 1);
                    console.log(result, rnd )
                    const business = {
                        name:result.businesses[rnd].name,
                        image:result.businesses[rnd].image_url,
                        url:result.businesses[rnd].url,
                        phone:result.businesses[rnd].display_phone,
                        distance:Math.round (((result.businesses[rnd].distance * 0.000621371) + Number.EPSILON) *100) /100,
                        price:result.businesses[rnd].price,
                        categories:result.businesses[rnd].categories,
                        address:result.businesses[rnd].location.display_address,
                        review_count:result.businesses[rnd].review_count,
                        rating:result.businesses[rnd].ratings
                        }
                    
                    res.render("displayResults", {business:business})

                }
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

