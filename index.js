(function (root) {
	'use strict';

	function BaseError (message) {
		if(Error.captureStackTrace) {
			Error.call(this);
 			Error.captureStackTrace(this, BaseError);
		} else {
			var err = new Error(message);
			this.stack = err.stack;
		}

		this.message = message;
	}

	BaseError.prototype = new Error(); 
	BaseError.prototype.name = 'BaseError';


	//Exports
	//AMD
	if (typeof define !== 'undefined' && define.amd) {
		define([], function () {
			return BaseError;
		});
	}

	//CommonJS
	else if (typeof module !== 'undefined' && module.exports) {
		module.exports = BaseError;
	}

	//Script tag
	else {
		root.BaseError = BaseError;
	}

} (this));