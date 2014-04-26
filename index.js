'use strict';

var util = require("util");

function BaseError (message) {
	Error.call(this);
  	//Error.captureStackTrace(this, arguments.callee);

    //this.message = message;
    //this.stack = (new Error()).stack;
}

util.inherits(BaseError, Error);

//BaseError.prototype = new Error; 


module.exports = BaseError;