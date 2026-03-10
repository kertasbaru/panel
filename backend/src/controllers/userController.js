const userService = require('../services/userService');
const { success } = require('../utils/response');

const getAll = async (req, res, next) => {
  try {
    const result = await userService.getAll(req.query);
    return success(res, result, 'Data user berhasil diambil');
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const result = await userService.getById(req.params.id);
    return success(res, result, 'Data user berhasil diambil');
  } catch (err) {
    next(err);
  }
};

const updateProfile = async (req, res, next) => {
  try {
    const result = await userService.updateProfile(req.body, req.user);
    return success(res, result, 'Profil berhasil diperbarui');
  } catch (err) {
    next(err);
  }
};

const changePassword = async (req, res, next) => {
  try {
    const result = await userService.changePassword(req.body, req.user);
    return success(res, result, 'Password berhasil diubah');
  } catch (err) {
    next(err);
  }
};

const changePin = async (req, res, next) => {
  try {
    const result = await userService.changePin(req.body, req.user);
    return success(res, result, 'PIN berhasil diubah');
  } catch (err) {
    next(err);
  }
};

const updateStatus = async (req, res, next) => {
  try {
    const result = await userService.updateStatus(req.params.id, req.body);
    return success(res, result, 'Status user berhasil diperbarui');
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await userService.deleteUser(req.params.id);
    return success(res, null, 'Data berhasil dihapus');
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, getById, updateProfile, changePassword, changePin, updateStatus, deleteUser };
