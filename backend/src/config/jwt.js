require('dotenv').config();

const accessSecret = process.env.JWT_ACCESS_SECRET || 'default_access_secret';
const refreshSecret = process.env.JWT_REFRESH_SECRET || 'default_refresh_secret';

if (process.env.NODE_ENV === 'production') {
  if (!process.env.JWT_ACCESS_SECRET || !process.env.JWT_REFRESH_SECRET) {
    throw new Error('JWT_ACCESS_SECRET and JWT_REFRESH_SECRET must be set in production');
  }
}

module.exports = {
  accessSecret,
  refreshSecret,
  accessExpiry: process.env.JWT_ACCESS_EXPIRY || '15m',
  refreshExpiry: process.env.JWT_REFRESH_EXPIRY || '7d',
};
