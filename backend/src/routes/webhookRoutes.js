const router = require('express').Router();
const webhookController = require('../controllers/webhookController');

router.post('/ppob', webhookController.handlePpobCallback);
router.post('/payment', webhookController.handlePaymentCallback);

module.exports = router;
