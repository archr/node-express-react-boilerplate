var path = require('path');
var config;

var root = path.resolve(__dirname, '../');
var port = process.env.PORT;

config = {};

config.test = {
  port: port || 3000,
  db: 'mongodb://localhost/app-test',
  env: 'test',
  root: root
};

config.development = {
  port: port || 3000,
  db: 'mongodb://localhost/app-dev',
  env: 'development',
  root: root
};

config.production = {
  port: port || 5000,
  db: 'mongodb://localhost/app-production',
  env: 'development',
  root: root
};

module.exports = config;