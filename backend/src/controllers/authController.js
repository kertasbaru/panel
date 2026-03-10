const authService = require('../services/authService');
const { success } = require('../utils/response');

const register = async (req, res, next) => {
  try {
    const result = await authService.register(req.body);
    return success(res, result, 'Registrasi berhasil', 201);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body);
    return success(res, result, 'Login berhasil');
  } catch (err) {
    next(err);
  }
};

const logout = async (req, res, next) => {
  try {
    const result = await authService.logout(req.user);
    return success(res, result, 'Logout berhasil');
  } catch (err) {
    next(err);
  }
};

const refreshToken = async (req, res, next) => {
  try {
    const result = await authService.refreshToken(req.body);
    return success(res, result, 'Token berhasil diperbarui');
  } catch (err) {
    next(err);
  }
};

const forgotPassword = async (req, res, next) => {
  try {
    const result = await authService.forgotPassword(req.body);
    return success(res, result, 'Link reset password berhasil dikirim');
  } catch (err) {
    next(err);
  }
};

const resetPassword = async (req, res, next) => {
  try {
    const result = await authService.resetPassword(req.body);
    return success(res, result, 'Password berhasil direset');
  } catch (err) {
    next(err);
  }
};

const getMe = async (req, res, next) => {
  try {
    const result = await authService.getMe(req.user);
    return success(res, result, 'Data user berhasil diambil');
  } catch (err) {
    next(err);
  }
};

const verifyOTP = async (req, res, next) => {
  try {
    const result = await authService.verifyOTP(req.body);
    return success(res, result, 'Verifikasi OTP berhasil');
  } catch (err) {
    next(err);
  }
};

const resendOTP = async (req, res, next) => {
  try {
    const result = await authService.resendOTP(req.body);
    return success(res, result, 'OTP berhasil dikirim ulang');
  } catch (err) {
    next(err);
  }
};

const googleLogin = async (req, res, next) => {
  try {
    const result = await authService.googleLogin(req.body);
    return success(res, result, 'Login dengan Google berhasil');
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login, logout, refreshToken, forgotPassword, resetPassword, getMe, verifyOTP, resendOTP, googleLogin };
