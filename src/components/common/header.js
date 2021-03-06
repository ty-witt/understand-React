"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


/*
might need brackets, try without first
{svg}
*/

var Header = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 72" >
								<defs>
									<polygon id="a" points=".941 71.94 89.466 71.94 89.466 .6 .941 .6" />
								</defs>
								<g fill="none" fill-rule="evenodd">
									<path fill="#cc150a" d="M.072.6L15.246.6 15.246 12.459 22.124 12.459 22.124.6 37.74.6 37.74 39.17C37.74 39.17 38.789 47.765 34.906 52.719 30.428 58.432 22.124 57.582 22.124 57.582L22.124 17.72 15.246 17.72 15.246 57.582C15.246 57.582 9.665 58.511 3.713 53.652-.822 49.949.072 39.17.072 39.17L.072.6M153.967 56.946L153.967 50.409 145.694 50.409C145.694 50.409 144.132 50.897 142.571 49.433 141.011 47.971 141.221 44.555 141.221 44.555L141.221 19.427C141.221 19.427 141.221 16.779 143.839 16.695 146.865 16.597 147.352 19.427 147.352 19.427L147.332 39.054C146.77 43.08 143.371 44.612 143.371 44.612 143.371 44.612 154.218 45.409 157.36 43.263 161.423 40.484 161.526 35.887 161.526 35.887L161.506 25.574C161.499 21.359 159.889 18.351 156.886 15.804 152.948 12.463 149.18 12.311 145.206 12.197 142.819 12.128 134.444 12.061 130.217 17.174 126.913 21.171 126.653 25.574 126.653 25.574L126.653 42.393C126.653 42.393 126.653 47.384 130.33 51.58 135.543 57.528 141.221 56.946 141.221 56.946L153.967 56.946" />
									<g transform="translate(43)">
										<mask id="b" fill="white">
										</mask>
										<path fill="#cc150a" d="M72.419.6L57.905 45.08 57.905.6 43.533.6 43.533 26.943C45.698 28.028 47.198 30.244 47.198 32.83 47.198 35.416 45.698 37.632 43.533 38.716L43.533 56.962 47.151 56.962C57.905 56.962 62.489 57.582 68.395 51.398 70.459 49.236 72.438 44.569 72.438 44.569L89.466.6 72.419.6M33.985 32.83C33.985 30.364 35.351 28.24 37.353 27.104L37.353 12.565 22.877 12.565 22.877 51.897C22.877 51.897 18.106 52.286 17.095 50.628 16.085 48.969 16.315 44.676 16.315 44.676L16.315 12.565.941 12.565.941 44.676C.941 44.676 1.45 50.628 4.475 53.556 8.59 57.538 14.294 57.068 14.294 57.068L22.877 57.068 22.876 72 37.353 72 37.353 38.555C35.351 37.42 33.985 35.295 33.985 32.83" mask="url(#b)" />
									</g>
									<path fill="#cc150a" d="M192.861 56.855L192.861 50.317 184.586 50.317C184.586 50.317 183.026 50.805 181.464 49.341 179.905 47.878 180.115 44.462 180.115 44.462L180.115 19.335C180.115 19.335 180.115 16.687 182.733 16.603 185.757 16.505 186.246 19.335 186.246 19.335L186.224 38.962C185.665 42.988 182.264 44.521 182.264 44.521 182.264 44.521 193.112 45.317 196.252 43.171 200.316 40.393 200.419 35.794 200.419 35.794L200.4 25.482C200.392 21.267 198.783 18.259 195.78 15.712 191.84 12.371 188.074 12.218 184.099 12.105 181.713 12.037 173.338 11.968 169.111 17.082 165.807 21.079 165.545 25.482 165.545 25.482L165.545 42.3C165.545 42.3 165.545 47.292 169.223 51.487 174.436 57.437 180.115 56.855 180.115 56.855L192.861 56.855M205.004 50.193C205.606 50.193 206.044 50.248 206.328 50.368 206.827 50.572 207.073 50.981 207.079 51.594 207.079 52.027 206.922 52.345 206.604 52.55 206.435 52.657 206.202 52.735 205.9 52.784 206.279 52.844 206.555 53.001 206.736 53.259 206.911 53.511 206.995 53.758 207 54.01L207 54.365C207 54.473 207 54.594 207.012 54.726 207.019 54.852 207.031 54.935 207.055 54.978L207.084 55.038 206.286 55.038C206.286 55.026 206.286 55.015 206.273 54.99 206.273 54.978 206.273 54.96 206.261 54.935L206.243 54.78 206.243 54.396C206.243 53.836 206.092 53.469 205.786 53.283 205.606 53.181 205.293 53.133 204.836 53.127L204.163 53.127 204.163 55.038 203.309 55.038 203.309 50.193 205.004 50.193zM205.918 50.956C205.708 50.837 205.365 50.776 204.89 50.776L204.163 50.776 204.163 52.531 204.932 52.531C205.293 52.531 205.564 52.495 205.745 52.423 206.075 52.291 206.237 52.039 206.243 51.666 206.243 51.317 206.135 51.083 205.918 50.956zM208.214 55.76C207.355 56.625 206.315 57.058 205.088 57.058 203.869 57.058 202.829 56.625 201.969 55.76 201.116 54.899 200.689 53.86 200.689 52.628 200.689 51.414 201.116 50.38 201.982 49.515 202.834 48.66 203.869 48.234 205.088 48.228 206.309 48.228 207.349 48.655 208.214 49.515 209.074 50.368 209.5 51.401 209.507 52.628 209.507 53.848 209.081 54.888 208.214 55.76zM202.408 49.94C201.674 50.681 201.308 51.576 201.302 52.628 201.302 53.686 201.668 54.587 202.402 55.333 203.135 56.078 204.032 56.451 205.088 56.451 206.14 56.451 207.037 56.078 207.776 55.333 208.509 54.587 208.875 53.686 208.882 52.628 208.882 51.582 208.515 50.687 207.776 49.94 207.037 49.196 206.14 48.822 205.088 48.822 204.043 48.822 203.153 49.196 202.408 49.94L202.408 49.94z" />
								</g>
							</svg>
						</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#About">About</a></li>
                            <li><a href="#Benefits">Benefits</a></li>
                            <li><a href="#Contact">Apply</a></li>
                        </ul>
                    </div>
                </div>
                <div className="logoBackground"></div>
            </nav>
            
        );
    }
});

module.exports = Header;