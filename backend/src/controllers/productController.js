const productService = require('../services/productService');
const { success } = require('../utils/response');

const getAll = async (req, res, next) => {
  try {
    const result = await productService.getAll(req.query);
    return success(res, result, 'Data produk berhasil diambil');
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const result = await productService.getById(req.params.id);
    return success(res, result, 'Data produk berhasil diambil');
  } catch (err) {
    next(err);
  }
};

const getByCategory = async (req, res, next) => {
  try {
    const result = await productService.getByCategory(req.params.slug);
    return success(res, result, 'Data produk berhasil diambil');
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await productService.create(req.body);
    return success(res, result, 'Produk berhasil ditambahkan', 201);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await productService.update(req.params.id, req.body);
    return success(res, result, 'Produk berhasil diperbarui');
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    await productService.delete(req.params.id);
    return success(res, null, 'Data berhasil dihapus');
  } catch (err) {
    next(err);
  }
};

const syncProducts = async (req, res, next) => {
  try {
    const result = await productService.syncProducts();
    return success(res, result, 'Produk berhasil disinkronkan');
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, getById, getByCategory, create, update, delete: remove, syncProducts };
