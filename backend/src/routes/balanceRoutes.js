const router = require('express').Router();
const balanceController = require('../controllers/balanceController');
const { authenticate } = require('../middlewares/authMiddleware');

router.get('/', authenticate, balanceController.getBalance);
router.get('/mutations', authenticate, balanceController.getMutations);

module.exports = router;
