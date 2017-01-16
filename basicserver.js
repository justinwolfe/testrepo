//basic-server.js

//We require express to use all of its useful features, and to make writing node a lot easier
var express = require('express');

//This sets up our app as a basic express server.
var app = express();

//Let's set up a port for our server to listen on
var port = 8300;

//Just one basic server response, to make sure our server is working.
app.get('/*', function(req, res){  
  res.send('Halo Wrld');
});

//Let's start up our server listening on our port:
var server = app.listen(port, function(){  
  console.log('Basic-server is listening on port ' + port);
});