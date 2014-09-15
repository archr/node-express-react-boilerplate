var express = require('express');

var api = express.Router();

api.route('/')
  .get(function (req, res) {
    res.json({
      success: true
    });
  });


module.exports = api;