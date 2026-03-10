const { error } = require('../utils/response');

const errorHandler = (err, req, res, _next) => {
  console.error('Error:', err);

  if (err.name === 'SequelizeValidationError') {
    const errors = err.errors.map((e) => ({
      field: e.path,
      message: e.message,
    }));
    return error(res, 'Validasi gagal', 422, errors);
  }

  if (err.name === 'SequelizeUniqueConstraintError') {
    const errors = err.errors.map((e) => ({
      field: e.path,
      message: `${e.path} sudah digunakan`,
    }));
    return error(res, 'Data sudah ada', 409, errors);
  }

  if (err.name === 'SequelizeForeignKeyConstraintError') {
    return error(res, 'Data terkait tidak ditemukan', 400);
  }

  if (err.statusCode) {
    return error(res, err.message, err.statusCode);
  }

  return error(res, 'Internal Server Error', 500);
};

module.exports = { errorHandler };
