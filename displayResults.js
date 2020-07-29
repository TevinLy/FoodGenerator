// export function so we can call it from apiCalls.js

module.exports = { displayResults :

/*
** Name : displayResults
** Parameters: results (type = array) - results from apiCall()
** Returns: None
** Description: Given data, we display it by rendering an new page for our user
** Error handling will be done here. Errors are estimated to only come from empty results data
** or Error displaying webpage
*/
// Check Yelp Api Document for example json result

function displayResults( results )
{
    
    for ( business of results)
    {
        res.render ( "displayResults", {business : business});
    }
    
} 

};