"use strict";

var $ = require('jquery');
global.$ = $;
global.jQuery = $;
var Bootstrap = require('bootstrap/dist/js/bootstrap.min.js');
var plainJS = require('./customjs/plainJS');

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var routes = require('./routes');

//must be IE8 or better for Router.HistoryLocation
//if routes don't work remove 'Router.HistoryLocation'
//TODO: Make Router.HistoryLocation work with 404 not found page
//TODO: when Router.HistoryLocation is commented out we get and error with 
//Bootstraps.js included for the URL '#' in the URL...

Router.run(routes, Router.HistoryLocation, function(Handler) {
    ReactDOM.render(<Handler/>, document.getElementById('app'));
});