const express = require('express');
var app = express();
const btoa = require('btoa');
const fetch = require('node-fetch');

app.use(express.static('public'));

/********   RESPONSES   ********/

app.get('/', async (req, res) => {
  res.sendFile(__dirname + '/views/index.html'); 
});

app.get('/commands', function(request, response) {
  response.sendFile(__dirname + '/commands/index.html');
});

app.get('/dashboard', function(request, response) {
  response.redirect("https://dashboard-expobot.glitch.me"); 
});

app.get('*', function(request, response) {
  response.status(404).sendFile(__dirname + '/404/index.html');
});

var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
