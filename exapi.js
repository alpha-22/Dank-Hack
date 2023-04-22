const request = require('request');
var muscle = 'biceps';
request.get({
  url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
  headers: {
    'X-Api-Key': 'SUtyeLZK1bYpSfghnRR82g==1IyRfOjmi8shJkBE',
    qs: {muscle: 'biceps'}
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});