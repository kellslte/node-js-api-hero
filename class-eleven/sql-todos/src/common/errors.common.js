
export class BaseError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 500;
  }

  formatZodErrors(errors) {
    return errors.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
  }
}

export class NotFoundError extends BaseError {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}

export class BadRequestError extends BaseError {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

export class UnprocessibleEntityError extends BaseError {
  constructor(message, errors) {
    super(message);
    this.statusCode = 422;
    this.errors = this.formatZodErrors(errors);
    // this.errors = errors;
  }
}

export class UnauthorizedError extends BaseError {
  constructor(message) {
    super(message);
    this.statusCode = 403;
  }
}

export class UnauthenticatedError extends BaseError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

export class ConflictError extends BaseError {
  constructor(message) {
    super(message);
    this.statusCode = 409;
  }
}
