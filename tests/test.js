'use strict';

var should = require('should');
var BaseError = require('../dist/index.js');

describe('Create error:', function() {
	it('should be able to create instance of error', function(done) {
		var error = new BaseError('Message of error');

		(error instanceof Error).should.equal(true);
		(error instanceof BaseError).should.equal(true);

		error.should.have.property('message');
		error.message.should.equal('Message of error');

		error.should.have.property('stack');
		error.should.have.property('name');

		done();
	});
}); 

