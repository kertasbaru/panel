const Joi = require('joi');

const createProduct = Joi.object({
  category_id: Joi.number().required(),
  provider_code: Joi.string().required(),
  name: Joi.string().required(),
  brand: Joi.string().required(),
  type: Joi.string().valid('prepaid', 'postpaid').required(),
  base_price: Joi.number().required(),
  sell_price: Joi.number().required(),
  agent_price: Joi.number().required(),
  admin_fee: Joi.number().optional(),
  commission: Joi.number().optional(),
  description: Joi.string().optional(),
});

const updateProduct = Joi.object({
  category_id: Joi.number().optional(),
  provider_code: Joi.string().optional(),
  name: Joi.string().optional(),
  brand: Joi.string().optional(),
  type: Joi.string().valid('prepaid', 'postpaid').optional(),
  base_price: Joi.number().optional(),
  sell_price: Joi.number().optional(),
  agent_price: Joi.number().optional(),
  admin_fee: Joi.number().optional(),
  commission: Joi.number().optional(),
  description: Joi.string().optional(),
});

module.exports = { createProduct, updateProduct };
