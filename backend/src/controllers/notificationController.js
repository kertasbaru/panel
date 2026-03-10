const notificationService = require('../services/notificationService');
const { success } = require('../utils/response');

const getAll = async (req, res, next) => {
  try {
    const result = await notificationService.getAll(req.query, req.user);
    return success(res, result, 'Data notifikasi berhasil diambil');
  } catch (err) {
    next(err);
  }
};

const markAsRead = async (req, res, next) => {
  try {
    const result = await notificationService.markAsRead(req.params.id, req.user);
    return success(res, result, 'Notifikasi berhasil ditandai dibaca');
  } catch (err) {
    next(err);
  }
};

const markAllAsRead = async (req, res, next) => {
  try {
    const result = await notificationService.markAllAsRead(req.user);
    return success(res, result, 'Semua notifikasi berhasil ditandai dibaca');
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, markAsRead, markAllAsRead };
