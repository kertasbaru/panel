const transactionService = require('../services/transactionService');
const { success } = require('../utils/response');

const getAll = async (req, res, next) => {
  try {
    const result = await transactionService.getAll(req.query, req.user);
    return success(res, result, 'Data transaksi berhasil diambil');
  } catch (err) {
    next(err);
  }
};

const getAllAdmin = async (req, res, next) => {
  try {
    const result = await transactionService.getAllAdmin(req.query);
    return success(res, result, 'Data transaksi berhasil diambil');
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const result = await transactionService.getById(req.params.id, req.user);
    return success(res, result, 'Data transaksi berhasil diambil');
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await transactionService.create(req.body, req.user);
    return success(res, result, 'Transaksi berhasil dibuat', 201);
  } catch (err) {
    next(err);
  }
};

const inquiry = async (req, res, next) => {
  try {
    const result = await transactionService.inquiry(req.body, req.user);
    return success(res, result, 'Inquiry berhasil');
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, getAllAdmin, getById, create, inquiry };
