"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Footer = React.createClass({
    render: function () {
        return (
			<footer>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6 col-sm-6">
							<p>2017 &copy; HY-VEE. ALL RIGHTS RESERVED.</p>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-6">
							<p className="text-right"><a href="#app" title="To Top">BACK TO TOP <span className="glyphicon glyphicon-chevron-up"></span></a></p>
						</div>
					</div>
				</div>
			</footer>
        );
    }
});

module.exports = Footer;