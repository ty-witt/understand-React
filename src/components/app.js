/*eslint-disable strict  */ //Disabling check because we cant run strict mode. Needd global vars.

var React = require('react');

var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
    render: function() {
        return (
                <div>                 
                        <RouteHandler/>                  
                </div>
        );            
    }
});

module.exports = App;