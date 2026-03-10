const Joi = require('joi');

const createDeposit = Joi.object({
  amount: Joi.number().min(10000).required(),
  payment_method: Joi.string().required(),
  payment_channel: Joi.string().optional(),
});

module.exports = { createDeposit };
