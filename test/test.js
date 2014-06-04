'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	BaseError = require('./../index.js');

//The tests
describe('<Unit Test>', function() {
	describe('Create error:', function() {

		it('should be able to create instance of error', function(done) {
			var error = new BaseError('Message of error');

			error.should.have.property('message');
			error.message.should.equal('Message of error');

			error.should.have.property('stack');


			error.should.have.property('name');
			error.name.should.equal('BaseError');

			(error instanceof Error).should.equal(true);
			(error instanceof BaseError).should.equal(true);

			done();
		});
	}); 
});
