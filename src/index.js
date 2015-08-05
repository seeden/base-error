export default class BaseError extends Error {
  constructor(message) {
    super(message);

    this.message = this.message || message;

    if (!this.stack) {
      this.captureStackTrace();
    }
  }

  captureStackTrace() {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this);
    } else {
      const err = new Error();
      this.stack = err.stack;
    }
  }
}

BaseError.prototype.name = 'BaseError';
