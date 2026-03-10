const crypto = require('crypto');
const cacheService = require('./cacheService');

const OTP_TTL = 300; // 5 minutes
const MAX_ATTEMPTS = 5;

const generateAndStore = async (email) => {
  const otp = crypto.randomInt(100000, 999999).toString();
  await cacheService.set(`otp:${email}`, otp, OTP_TTL);
  await cacheService.del(`otp_attempts:${email}`);
  return otp;
};

const verify = async (email, otp) => {
  const attemptsKey = `otp_attempts:${email}`;
  const otpKey = `otp:${email}`;

  const attempts = (await cacheService.get(attemptsKey)) || 0;
  if (attempts >= MAX_ATTEMPTS) {
    await cacheService.del(otpKey);
    const err = new Error('Terlalu banyak percobaan. Silakan minta OTP baru');
    err.statusCode = 429;
    throw err;
  }

  const storedOtp = await cacheService.get(otpKey);
  if (!storedOtp) {
    const err = new Error('Kode OTP sudah kedaluwarsa atau tidak ditemukan');
    err.statusCode = 400;
    throw err;
  }

  await cacheService.set(attemptsKey, attempts + 1, OTP_TTL);

  if (storedOtp !== otp) {
    const err = new Error('Kode OTP tidak valid');
    err.statusCode = 400;
    throw err;
  }

  await cacheService.del(otpKey);
  await cacheService.del(attemptsKey);

  return true;
};

module.exports = { generateAndStore, verify };
