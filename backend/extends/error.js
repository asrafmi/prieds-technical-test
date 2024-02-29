class CustomError extends Error {
  /**
   * @param {string} message
   * @param {Number} status
   */
  constructor(message, status) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

class BadRequest extends CustomError {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message, 400);
  }
}

class InternalServerError extends CustomError {
  /**
   *
   * @param {string} message
   */
  constructor(message) {
    super(message, 500);
  }
}

class HttpNotFound extends CustomError {
  /**
   *
   * @param {string} message
   */
  constructor(message) {
    super(message, 404);
  }
}

class MongoError extends CustomError {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message, 500);
  }
}

class ConflictError extends CustomError {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message, 409);
  }
}

module.exports = {
  BadRequest,
  InternalServerError,
  HttpNotFound,
  MongoError,
  ConflictError,
};
