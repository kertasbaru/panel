const { success } = require('../utils/response');

const handlePpobCallback = async (req, res, next) => {
  try {
    return success(res, req.body, 'PPOB callback received');
  } catch (err) {
    next(err);
  }
};

const handlePaymentCallback = async (req, res, next) => {
  try {
    return success(res, req.body, 'Payment callback received');
  } catch (err) {
    next(err);
  }
};

module.exports = { handlePpobCallback, handlePaymentCallback };
