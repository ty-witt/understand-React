"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = require('./common/header');
var Footer = require('./common/footer');
var HeroSecion = require('./homePageComponents/heroSection');
var About = require('./homePagecomponents/aboutSection');
var Gigity = require('./homePageComponents/gigitySection');
var BenefitsPerks = require('./homePagecomponents/benefitsPerksSection');
var ApplySection = require('./homePageComponents/applySection');
var $ = require('jquery');

var Home = React.createClass({

    render: function () {
        return (
            <div>
                <Header />
                <HeroSecion />
                <About />
                <Gigity />
                <BenefitsPerks />
                <ApplySection /> 
                <Footer />           
            </div>
        );
    }

});

module.exports = Home;