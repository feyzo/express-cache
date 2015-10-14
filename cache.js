'use strict';

var memoryCache = {

};

var cacher = function (options) {
  console.log('Cache options', options);

  return function (req, res, next) {
    if (memoryCache[req.path]) {
      console.log('serving from cache');
      return res.send(memoryCache[req.path]);
    }

    var finalBody,
      key = req.path;

    res.originalSend = res.send;

    res.sendCache(function (key) {
      res.originalSend(memoryCache[key]);
    });

    res.send = function (body) {
      finalBody = body;
      res.originalSend(body);
    };

    res.on('finish', function () {
      memoryCache[key] = finalBody;
    });

    next();
  };
};


module.exports = cacher;