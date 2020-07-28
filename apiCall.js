const axios = require('axios')



url = 'https://api.yelp.com/v3/businesses/search'
clientID='Uc7Xq3H9mbGVve2Zj7a9RQ'
apiKey = '8f-9kzIemVxck4ONpD8gVflODiELG0kqJCwhqgw7f9cTgqza1wLfkvTBmwqhyzfRJLL9K7-cKdoz0JT3le2VR1S40z51tw4FsLN88RSILB_zEIJ2p_rn4L_tIHYgX3Yx'
header ={'Authorization': 'Bearer 8f-9kzIemVxck4ONpD8gVflODiELG0kqJCwhqgw7f9cTgqza1wLfkvTBmwqhyzfRJLL9K7-cKdoz0JT3le2VR1S40z51tw4FsLN88RSILB_zEIJ2p_rn4L_tIHYgX3Yx'}


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
