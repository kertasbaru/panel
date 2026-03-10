const settingService = require('../services/settingService');
const { success } = require('../utils/response');

const getAll = async (req, res, next) => {
  try {
    const result = await settingService.getAll();
    return success(res, result, 'Data pengaturan berhasil diambil');
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await settingService.update(req.body);
    return success(res, result, 'Pengaturan berhasil diperbarui');
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, update };
