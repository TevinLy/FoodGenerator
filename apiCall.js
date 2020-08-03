//Using axios to make GET request to Yelp API

const axios = require('axios')

/*
** Name : apiCall
** Parameters: terms (type = dict) - search terms/parameters used for our search. see below for format
** Returns: 0 if error, 1 if everything is good and we moved to displayData()
** Description: Given search parameters, we call the YelpFusion API. Data is passed to 
** displayResults() function ins displayData.js. NO ERROR HANDLING. MUST HANDLE IN CALLER FNC
*/

/*
** Dictionary used to organize parameters. 
** search terms example. 
**  terms = {
        term:'Tacos',
        location: 'castro valley, ca',
        limit : '3',
        open_now: 'true'
**  };
** Please take a look at *insertParamsTextFile.txt* for detailed info
*/

function apiCall (  )
{
    const url = 'https://api.yelp.com/v3/businesses/search'

    // api key in format 'Bearer <API_KEY>' //please keep dev api off git
    header ={'Authorization': 'Bearer 8f-9kzIemVxck4ONpD8gVflODiELG0kqJCwhqgw7f9cTgqza1wLfkvTBmwqhyzfRJLL9K7-cKdoz0JT3le2VR1S40z51tw4FsLN88RSILB_zEIJ2p_rn4L_tIHYgX3Yx'}

    // search terms example. 
    terms = {
        term:'Tacos',
        location: 'castro valley, ca',
        limit : '3',
        open_now: 'true'
    };
    
    return  axios.get(url, {headers:header, params:terms})
    .then( response => {
        return response.data.businesses
        
    })
    .catch(function(error){
        console.log(error);
    });

}

 async function getResults () {
    
    let results = await Promise.resolve ( apiCall() )
    console.log(results)
    
    return results
  }

  //getResults();

 exports.getResults = getResults; 