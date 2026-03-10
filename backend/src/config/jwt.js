require('dotenv').config();

module.exports = {
  accessSecret: process.env.JWT_ACCESS_SECRET || 'default_access_secret',
  refreshSecret: process.env.JWT_REFRESH_SECRET || 'default_refresh_secret',
  accessExpiry: process.env.JWT_ACCESS_EXPIRY || '15m',
  refreshExpiry: process.env.JWT_REFRESH_EXPIRY || '7d',
};
