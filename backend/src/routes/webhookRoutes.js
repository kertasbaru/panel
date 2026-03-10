const router = require('express').Router();
const webhookController = require('../controllers/webhookController');

router.post('/ppob', webhookController.ppob);
router.post('/payment', webhookController.payment);

module.exports = router;
