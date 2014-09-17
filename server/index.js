/**
 * Dependencias
 */
var mongoose = require('mongoose');
var express = require('express');
var debug = require('debug')('app:index');
var path = require('path');
var fs = require('fs');

var config;

var app = express();

/**
 * Se carga la configuración dependendiendo del ambiente en el que
 * se inice el server: test, develoment, production
 *
 * $ NODE_ENV=development node index.js
 */
var env = process.env.NODE_ENV || 'development';
GLOBAL.config = config = require('./config')[env];
debug('configuration %j', config);

/**
 * Conexión a mongoDB con mongoose
 *
 */
mongoose.connect(config.db);

/**
 * Se cargan los modelos definidos en ./models
 * los cuales son schemas de mongoose
 */
var models = path.resolve(config.root, './models');
debug('models %s', models);
fs.readdirSync(models).forEach(function (file){
  var model = path.resolve(models, file);
  debug('loading model %s %s', file, model);
  require(model)();
});

/**
 * Se configura express
 */
require('./config/express')(app);

/**
 * Se cargan las rutas
 */
require('./routes')(app);

/**
 * Se agrega el puerto en el que funcionara al app
 */
app.listen(config.port, function () {
  console.log('server listen on port: %d', config.port);
});