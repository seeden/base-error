(function (root) {
	'use strict';

	function BaseError (message, constructorOpt) {
		this.captureStackTrace(constructorOpt || BaseError);
		this.message = message;
	}

	BaseError.prototype = new Error(); 
	BaseError.prototype.name = 'BaseError';

	BaseError.prototype.captureStackTrace = function(constructorOpt) {
		if(Error.captureStackTrace) {
			Error.captureStackTrace(this, constructorOpt);
		} else {
			var err = new Error();
			this.stack = err.stack;
		}
	};

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