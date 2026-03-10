const bcrypt = require('bcryptjs');
const { User } = require('../models');
const { getPagination, getPagingData } = require('../utils/pagination');

const SALT_ROUNDS = 10;

const getAll = async (query) => {
  const { page, limit, offset } = getPagination(query);

  const data = await User.findAndCountAll({
    attributes: { exclude: ['password', 'pin'] },
    limit,
    offset,
    order: [['created_at', 'DESC']],
  });

  return getPagingData(data, page, limit);
};

const getById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password', 'pin'] },
  });

  if (!user) {
    const err = new Error('User tidak ditemukan');
    err.statusCode = 404;
    throw err;
  }

  return user;
};

const updateProfile = async (data, user) => {
  const currentUser = await User.findByPk(user.id);

  if (!currentUser) {
    const err = new Error('User tidak ditemukan');
    err.statusCode = 404;
    throw err;
  }

  const { name, phone, avatar } = data;
  await currentUser.update({ name, phone, avatar });

  return currentUser.toSafeObject();
};

const changePassword = async (data, user) => {
  const { currentPassword, newPassword } = data;

  const currentUser = await User.findByPk(user.id);

  if (!currentUser) {
    const err = new Error('User tidak ditemukan');
    err.statusCode = 404;
    throw err;
  }

  const isPasswordValid = await bcrypt.compare(currentPassword, currentUser.password);
  if (!isPasswordValid) {
    const err = new Error('Password saat ini salah');
    err.statusCode = 400;
    throw err;
  }

  const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);
  await currentUser.update({ password: hashedPassword });

  return null;
};

const changePin = async (data, user) => {
  const { currentPin, newPin } = data;

  const currentUser = await User.findByPk(user.id);

  if (!currentUser) {
    const err = new Error('User tidak ditemukan');
    err.statusCode = 404;
    throw err;
  }

  if (currentUser.pin) {
    if (!currentPin) {
      const err = new Error('PIN saat ini diperlukan');
      err.statusCode = 400;
      throw err;
    }
    const isPinValid = await bcrypt.compare(currentPin, currentUser.pin);
    if (!isPinValid) {
      const err = new Error('PIN saat ini salah');
      err.statusCode = 400;
      throw err;
    }
  }

  const hashedPin = await bcrypt.hash(newPin, SALT_ROUNDS);
  await currentUser.update({ pin: hashedPin });

  return null;
};

const updateStatus = async (id, data) => {
  const user = await User.findByPk(id);

  if (!user) {
    const err = new Error('User tidak ditemukan');
    err.statusCode = 404;
    throw err;
  }

  await user.update({ status: data.status });

  return user.toSafeObject();
};

const deleteUser = async (id) => {
  const user = await User.findByPk(id);

  if (!user) {
    const err = new Error('User tidak ditemukan');
    err.statusCode = 404;
    throw err;
  }

  await user.destroy();
};

module.exports = { getAll, getById, updateProfile, changePassword, changePin, updateStatus, deleteUser };
