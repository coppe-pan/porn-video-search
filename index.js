const request = require("request");


request.get('https://www.keezmovies.com/keyword/japanese', function (error, response, body) {
  // const data = JSON.parse(body);
  console.log('data:', body.data); // Print the HTML for the Google homepage.
});
