var React = require('react');
var debug = require('debug')('app');
var MainApplication = require('./components/MainApplication.jsx');


App = {};

App.start = function () {
  debug('initializing ...');
  mainApplication = new MainApplication();
  React.renderComponent(mainApplication, document.body);
}

module.exports = App;