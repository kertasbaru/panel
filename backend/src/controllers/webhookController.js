const webhookService = require('../services/webhookService');
const { success } = require('../utils/response');

const handlePpobCallback = async (req, res, next) => {
  try {
    const result = await webhookService.handlePpobCallback(req.body);
    return success(res, result, 'PPOB callback received');
  } catch (err) {
    next(err);
  }
};

const handlePaymentCallback = async (req, res, next) => {
  try {
    const result = await webhookService.handlePaymentCallback(req.body);
    return success(res, result, 'Payment callback received');
  } catch (err) {
    next(err);
  }
};

module.exports = { handlePpobCallback, handlePaymentCallback };
