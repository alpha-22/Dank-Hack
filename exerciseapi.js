const request = require('request');
const express = require('express');
const app = express();
const port = 80;
const path = require('path');
app.set('view engine', 'pug');
app.set("views",path.join(__dirname,'views'));
app.get('/', (req, res) => {
    res.render('index.pug', { body })
  })
var muscle = 'triceps';
request.get({
  url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
  headers: {

    'X-Api-Key': 'SUtyeLZK1bYpSfghnRR82g==1IyRfOjmi8shJkBE'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});


app.listen(port, ()=>{
    console.log("started");
})

