"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

/* Example route configurations 
<Route name="contact" handler={require('./components/benefits/authorPage')}/>        
<Route name="addAuthor" path="author" handler={require('./components/benefits/manageAuthorPage')}/> 
*/

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')}/>
        <Route name="apply" href="#apply"/> 
        <Route name="benefits" href="#benefits"/>
        <NotFoundRoute handler={require('./components/notFoundPage')} />
    </Route>
);

module.exports = routes;