const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User, Balance } = require('../models');
const jwtConfig = require('../config/jwt');
const otpService = require('./otpService');
const emailService = require('./emailService');

const generateTokens = (user) => {
  const payload = { id: user.id, uuid: user.uuid, email: user.email, role: user.role };

  const accessToken = jwt.sign(payload, jwtConfig.accessSecret, {
    expiresIn: jwtConfig.accessExpiry,
  });

  const refreshToken = jwt.sign(payload, jwtConfig.refreshSecret, {
    expiresIn: jwtConfig.refreshExpiry,
  });

  return { accessToken, refreshToken };
};

const register = async (data) => {
  const { name, email, phone, password } = data;

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    const err = new Error('Email sudah terdaftar');
    err.statusCode = 409;
    throw err;
  }

  const existingPhone = await User.findOne({ where: { phone } });
  if (existingPhone) {
    const err = new Error('Nomor telepon sudah terdaftar');
    err.statusCode = 409;
    throw err;
  }

  const user = await User.create({ name, email, phone, password, status: 'inactive' });

  await Balance.create({ user_id: user.id, amount: 0 });

  try {
    const otp = await otpService.generateAndStore(email);
    await emailService.sendOTP(email, otp);
  } catch (emailError) {
    await user.destroy();
    const err = new Error('Gagal mengirim email verifikasi. Silakan coba lagi');
    err.statusCode = 500;
    throw err;
  }

  return {
    user: user.toSafeObject(),
  };
};

const login = async (data) => {
  const { email, password } = data;

  const user = await User.findOne({ where: { email } });
  if (!user) {
    const err = new Error('Email atau password salah');
    err.statusCode = 401;
    throw err;
  }

  if (user.status !== 'active') {
    const err = new Error('Akun Anda tidak aktif');
    err.statusCode = 403;
    throw err;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    const err = new Error('Email atau password salah');
    err.statusCode = 401;
    throw err;
  }

  const tokens = generateTokens(user);

  return {
    user: user.toSafeObject(),
    ...tokens,
  };
};

const logout = async (user) => {
  return null;
};

const refreshToken = async (data) => {
  const { refreshToken: token } = data;

  if (!token) {
    const err = new Error('Refresh token diperlukan');
    err.statusCode = 400;
    throw err;
  }

  try {
    const decoded = jwt.verify(token, jwtConfig.refreshSecret);
    const user = await User.findByPk(decoded.id);

    if (!user) {
      const err = new Error('User tidak ditemukan');
      err.statusCode = 404;
      throw err;
    }

    const tokens = generateTokens(user);
    return tokens;
  } catch (error) {
    if (error.statusCode) throw error;
    const err = new Error('Refresh token tidak valid');
    err.statusCode = 401;
    throw err;
  }
};

const forgotPassword = async (data) => {
  const { email } = data;

  const user = await User.findOne({ where: { email } });
  if (!user) {
    return { message: 'Jika email terdaftar, link reset password akan dikirim' };
  }

  return { message: 'Jika email terdaftar, link reset password akan dikirim' };
};

const resetPassword = async (data) => {
  const { token, password } = data;

  try {
    const decoded = jwt.verify(token, jwtConfig.accessSecret);
    const user = await User.findByPk(decoded.id);

    if (!user) {
      const err = new Error('User tidak ditemukan');
      err.statusCode = 404;
      throw err;
    }

    await user.update({ password });

    return null;
  } catch (error) {
    if (error.statusCode) throw error;
    const err = new Error('Token reset tidak valid atau sudah kedaluwarsa');
    err.statusCode = 400;
    throw err;
  }
};

const getMe = async (user) => {
  const userData = await User.findByPk(user.id, {
    attributes: { exclude: ['password', 'pin'] },
    include: [{ model: Balance, attributes: ['amount'] }],
  });

  if (!userData) {
    const err = new Error('User tidak ditemukan');
    err.statusCode = 404;
    throw err;
  }

  return userData;
};

const verifyOTP = async (data) => {
  const { email, otp } = data;

  const user = await User.findOne({ where: { email } });
  if (!user) {
    const err = new Error('User tidak ditemukan');
    err.statusCode = 404;
    throw err;
  }

  if (user.status === 'active') {
    const err = new Error('Akun sudah terverifikasi');
    err.statusCode = 400;
    throw err;
  }

  await otpService.verify(email, otp);

  await user.update({ status: 'active' });

  const tokens = generateTokens(user);

  return {
    user: user.toSafeObject(),
    ...tokens,
  };
};

const resendOTP = async (data) => {
  const { email } = data;

  const user = await User.findOne({ where: { email } });
  if (!user) {
    const err = new Error('User tidak ditemukan');
    err.statusCode = 404;
    throw err;
  }

  if (user.status === 'active') {
    const err = new Error('Akun sudah aktif dan terverifikasi');
    err.statusCode = 400;
    throw err;
  }

  if (user.status === 'suspended') {
    const err = new Error('Akun Anda telah disuspend');
    err.statusCode = 403;
    throw err;
  }

  const otp = await otpService.generateAndStore(email);
  await emailService.sendOTP(email, otp);

  return null;
};

module.exports = { register, login, logout, refreshToken, forgotPassword, resetPassword, getMe, verifyOTP, resendOTP };
