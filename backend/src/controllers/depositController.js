const depositService = require('../services/depositService');
const { success } = require('../utils/response');

const getAll = async (req, res, next) => {
  try {
    const result = await depositService.getAll(req.query, req.user);
    return success(res, result, 'Data deposit berhasil diambil');
  } catch (err) {
    next(err);
  }
};

const getAllAdmin = async (req, res, next) => {
  try {
    const result = await depositService.getAllAdmin(req.query);
    return success(res, result, 'Data deposit berhasil diambil');
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const result = await depositService.getById(req.params.id, req.user);
    return success(res, result, 'Data deposit berhasil diambil');
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await depositService.create(req.body, req.user);
    return success(res, result, 'Deposit berhasil dibuat', 201);
  } catch (err) {
    next(err);
  }
};

const confirm = async (req, res, next) => {
  try {
    const result = await depositService.confirm(req.params.id, req.user);
    return success(res, result, 'Deposit berhasil dikonfirmasi');
  } catch (err) {
    next(err);
  }
};

const cancel = async (req, res, next) => {
  try {
    const result = await depositService.cancel(req.params.id, req.user);
    return success(res, result, 'Deposit berhasil dibatalkan');
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, getAllAdmin, getById, create, confirm, cancel };
