const Joi = require('joi');

const createTransaction = Joi.object({
  product_id: Joi.number().required(),
  target: Joi.string().required(),
  pin: Joi.string().required(),
});

const inquiry = Joi.object({
  product_id: Joi.number().required(),
  target: Joi.string().required(),
});

module.exports = { createTransaction, inquiry };
