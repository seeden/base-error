Base Error
============

You are able simpler extend standard Error class. 
Your new object will be contain stack from original Error object and message.

# Example
	var BaseError = require('base-error');

	var error = new BaseError('Message of error');

	(error instanceof Error).should.equal(true);
	(error instanceof BaseError).should.equal(true);