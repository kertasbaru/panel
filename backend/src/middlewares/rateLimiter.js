const rateLimit = require('express-rate-limit');
require('dotenv').config();

const createRateLimiter = (windowMs, max, message) => {
  return rateLimit({
    windowMs: windowMs || parseInt(process.env.RATE_LIMIT_WINDOW, 10) * 1000 || 60000,
    max: max || parseInt(process.env.RATE_LIMIT_MAX, 10) || 100,
    message: {
      success: false,
      message: message || 'Terlalu banyak request, coba lagi nanti',
    },
    standardHeaders: true,
    legacyHeaders: false,
  });
};

const apiLimiter = createRateLimiter();

const authLimiter = createRateLimiter(15 * 60 * 1000, 10, 'Terlalu banyak percobaan login, coba lagi dalam 15 menit');

const transactionLimiter = createRateLimiter(60 * 1000, 5, 'Terlalu banyak transaksi, coba lagi dalam 1 menit');

module.exports = { apiLimiter, authLimiter, transactionLimiter, createRateLimiter };
