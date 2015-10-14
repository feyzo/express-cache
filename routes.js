'use strict';

var express = require('express');
var router = express.Router();

var cache = require('./cache');

/* GET home page. */
router.get('/', cache({}), function(req, res) {
  res.send({ hello: 'world'});
});


router.get('/forloop', cache({}), function(req, res) {
  var data = '';
  for (var i = 10000; i >= 0; i--) {
    data += i;
  }

  res.send(data);
});

module.exports = router;
