const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');
const { error } = require('../utils/response');

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return error(res, 'Token tidak ditemukan', 401);
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, jwtConfig.accessSecret);
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return error(res, 'Token sudah kedaluwarsa', 401);
    }
    return error(res, 'Token tidak valid', 401);
  }
};

module.exports = { authenticate };
