'use strict';

function BaseError (message) {
	//Error.call(this);
  	//Error.captureStackTrace(this, arguments.callee);

    this.message = message;
    this.stack = (new Error()).stack;
}

BaseError.prototype = new Error; 


module.exports = BaseError;