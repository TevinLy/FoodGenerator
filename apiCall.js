//Using axios to make GET request to Yelp API

const axios = require('axios')

/*
** Name : apiCall
** Parameters: terms (type = dict) - search terms/parameters used for our search. see below for format
** Returns: Promise
** Description: Given search parameters, we call the YelpFusion API.  NO ERROR HANDLING. MUST HANDLE IN CALLER FNC
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

async function apiCall ( terms )
{
    //console.log(terms)
    const url = 'https://api.yelp.com/v3/businesses/search'

    // api key in format 'Bearer <API_KEY>' //please keep dev api off git
    header ={'Authorization': 'Bearer 8f-9kzIemVxck4ONpD8gVflODiELG0kqJCwhqgw7f9cTgqza1wLfkvTBmwqhyzfRJLL9K7-cKdoz0JT3le2VR1S40z51tw4FsLN88RSILB_zEIJ2p_rn4L_tIHYgX3Yx'}
    
    return await axios.get(url, {headers:header, params:terms})
    .then( response => {

        return response.data
        
    })
    .catch(function(error){

        console.log(error);

    });

}


/*
** Name : getResults
** Parameters: location - str 
** Returns: dictionary of terms
** Description: given location, generate terms used for search
** Add filters for vegan/vegeratian/halal etc in the future 
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

function generateTerms ( location ) {

    terms = {

        term:'food',
        location: location,
        limit : '50',
        open_now: 'true'

    };
     
    return terms

}


/*
** Name : getResults
** Parameters: terms (type = dict) - search terms/parameters used for our search. see below for format
** Returns: Promise
** Description: Wrapper for apiCall() 
*/
 async function getResults ( location ) {
     
    let terms = generateTerms( location )
    let results = await apiCall( terms ) 
    return results

  }

  //getResults();

 exports.getResults = getResults; 