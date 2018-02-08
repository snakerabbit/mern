var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var app = express();
var router = express.Router();
var port = process.env.API_PORT || 3001;


app.get('/', function(req, res){
  res.send("hello!");
});

app.listen(port);
