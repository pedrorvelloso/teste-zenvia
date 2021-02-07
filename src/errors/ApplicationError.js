class ApplicationError {
  constructor(error, message, statusCode = 400) {
    this.error = error
    this.message = message
    this.statusCode = statusCode
  }
}

module.exports = ApplicationError
