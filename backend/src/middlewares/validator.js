const { error } = require('../utils/response');

const validate = (schema) => {
  return (req, res, next) => {
    const { error: validationError } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (validationError) {
      const errors = validationError.details.map((detail) => ({
        field: detail.path.join('.'),
        message: detail.message,
      }));
      return error(res, 'Validasi gagal', 422, errors);
    }

    next();
  };
};

const validateQuery = (schema) => {
  return (req, res, next) => {
    const { error: validationError } = schema.validate(req.query, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (validationError) {
      const errors = validationError.details.map((detail) => ({
        field: detail.path.join('.'),
        message: detail.message,
      }));
      return error(res, 'Validasi query gagal', 422, errors);
    }

    next();
  };
};

module.exports = { validate, validateQuery };
