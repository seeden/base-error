Base Error
============

You are able simpler extend standard Error class. 
Your new object will be contain stack from original Error object and message.

You can use this library as AMD, CommonJS or root library in your [Webpack](http://webpack.github.io/) or [RequireJS](http://requirejs.org/) module bundler.
Works in the browser, in [NodeJS](http://nodejs.org/), [Bower](http://bower.io/) and with [Browserify](http://browserify.org/).

# Example
	var BaseError = require('base-error');

	var error = new BaseError('Message of error');

	(error instanceof Error).should.equal(true);
	(error instanceof BaseError).should.equal(true);