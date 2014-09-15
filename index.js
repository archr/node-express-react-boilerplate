// Dependencias
var mongoose = require('mongoose');
var express = require('express');
var debug = require('debug')('app:index');
var path = require('path');
var fs = require('fs');

var config;

var app = express();

// Se carga la configuración
var env = process.env.NODE_ENV || 'development';
GLOBAL.config = config = require('./config')[env];
debug('configuration %j', config);

// Conexión a MongoDB
mongoose.connect(config.db);

// Se cargan los modelos
var models = path.resolve(config.root, './models');
debug('models %s', models);
fs.readdirSync(models).forEach(function (file){
  var model = path.resolve(models, file);
  debug('loading model %s %s', file, model);
  require(model)();
});

// Se configura express
require('./config/express')(app);

// Se cargan rutas
require('./routes')(app);

// Se agrega el puerto en el que funcionara al app
app.listen(config.port, function () {
  console.log('server listen on port: %d', 3000);
});