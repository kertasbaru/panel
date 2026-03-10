const balanceService = require('../services/balanceService');
const { success } = require('../utils/response');

const getBalance = async (req, res, next) => {
  try {
    const result = await balanceService.getBalance(req.user);
    return success(res, result, 'Data saldo berhasil diambil');
  } catch (err) {
    next(err);
  }
};

const getMutations = async (req, res, next) => {
  try {
    const result = await balanceService.getMutations(req.query, req.user);
    return success(res, result, 'Data mutasi berhasil diambil');
  } catch (err) {
    next(err);
  }
};

module.exports = { getBalance, getMutations };
