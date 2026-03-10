const Joi = require('joi');

const updateProfile = Joi.object({
  name: Joi.string().optional(),
  phone: Joi.string().optional(),
  avatar: Joi.string().optional(),
});

const changePassword = Joi.object({
  currentPassword: Joi.string().required(),
  newPassword: Joi.string().min(8).required(),
});

const changePin = Joi.object({
  currentPin: Joi.string().length(6).pattern(/^\d+$/).optional(),
  newPin: Joi.string().length(6).pattern(/^\d+$/).required(),
});

module.exports = { updateProfile, changePassword, changePin };
