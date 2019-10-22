var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./config/database'); // get db config file
var User = require('./models/user'); // get the mongoose model
var Chave = require('./models/chave');
var port = process.env.PORT || 8080;
var jwt = require('jwt-simple');
mongoose.connect(config.database);

//routes var
var users = require('./routes/users');
var offers = require('./routes/offers');

// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// log to console
app.use(morgan('dev'));

// Use the passport package in our application
app.use(passport.initialize());

// demo Route (GET http://localhost:8080)
app.get('/', function (req, res) {
  res.send('Hello! The API is at http://localhost:' + port + '/api');
});

// Start the server
app.listen(port);
console.log('There will be dragons: http://localhost:' + port);

// demo Route (GET http://localhost:8080)
// ...

// connect the api routes under /api/*
app.use('/user', users);
app.use('/offer', offers)