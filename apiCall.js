//Using axios to make GET request to Yelp API

const axios = require('axios')

/*
** Name : apiCall
** Parameters: terms (type = dict) - search terms/parameters used for our search. see below for format
** Returns: 0 if error, 1 if everything is good and we moved to displayData()
** Description: Given search parameters, we call the YelpFusion API. Data is passed to 
** displayData() function ins displayData.js. NO ERROR HANDLING. MUST HANDLE IN CALLER FNC
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

function apiCall ( terms )
{
    const url = 'https://api.yelp.com/v3/businesses/search'

    // api key in format 'Bearer <API_KEY>' //please keep dev api off git
    header ={'Authorization': 'Bearer '}

    // search terms example. 
    terms = {
        term:'Tacos',
        location: 'castro valley, ca',
        limit : '3',
        open_now: 'true'
    };

  axios.get(url, {headers:header, params:terms})
  .then(response => {
        //console.log(response.data)
        let results = [];
        for ( let business of response.data.businesses)
        {
            // console.log(business)
            results.push(business)
        }
        console.log(results)
        //Call display results if we dont get error

        return 1;
  })
  .catch(error => {
    console.log(error)
  })
  return 0;
}



