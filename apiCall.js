const axios = require('axios')



url = 'https://api.yelp.com/v3/businesses/search'
clientID='Uc7Xq3H9mbGVve2Zj7a9RQ'

header ={'Authorization': 'Bearer '}


// search terms
const terms = {
    term:'Tacos',
    location: 'castro valley, ca'
  };

  axios.get(url, {headers:header, params:terms})
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })
