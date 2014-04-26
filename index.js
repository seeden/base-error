'use strict';

var util = require("util");

function BaseError (message) {
	Error.call(this);
  	Error.captureStackTrace(this, this.constructor);

	this.className = this.constructor.name
    this.message = message;
}

util.inherits(BaseError, Error);

module.exports = BaseError;