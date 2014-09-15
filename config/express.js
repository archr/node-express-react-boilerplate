var bodyParser = require('body-parser');
var express = require('express');
var logger = require('morgan');
var path = require('path');

module.exports = function (app) {
  var pub = path.resolve(config.root, './public');

  app.use(logger('dev'));
  app.use(express.static(pub));
  app.use(bodyParser.json({extended: true}));

  return;
};

