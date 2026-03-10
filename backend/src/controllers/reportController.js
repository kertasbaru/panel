const reportService = require('../services/reportService');
const { success } = require('../utils/response');

const getSalesReport = async (req, res, next) => {
  try {
    const result = await reportService.getSalesReport(req.query);
    return success(res, result, 'Laporan penjualan berhasil diambil');
  } catch (err) {
    next(err);
  }
};

const getCommissionReport = async (req, res, next) => {
  try {
    const result = await reportService.getCommissionReport(req.query);
    return success(res, result, 'Laporan komisi berhasil diambil');
  } catch (err) {
    next(err);
  }
};

const getSummary = async (req, res, next) => {
  try {
    const result = await reportService.getSummary(req.query);
    return success(res, result, 'Ringkasan laporan berhasil diambil');
  } catch (err) {
    next(err);
  }
};

const exportReport = async (req, res, next) => {
  try {
    const result = await reportService.exportReport(req.query);
    return success(res, result, 'Laporan berhasil diekspor');
  } catch (err) {
    next(err);
  }
};

module.exports = { getSalesReport, getCommissionReport, getSummary, exportReport };
