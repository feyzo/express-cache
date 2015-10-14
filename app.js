'use strict';

var express = require('express');
var logger = require('morgan');

var routes = require('./routes');

var app = express();

app.use(logger('dev'));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res) {
  res.status(404).send('Not found');
});


module.exports = app;
