const router = require('express').Router();
const depositController = require('../controllers/depositController');
const { authenticate } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');
const { validate } = require('../middlewares/validator');
const { createDeposit } = require('../validators/depositValidator');
const { transactionLimiter } = require('../middlewares/rateLimiter');

router.get('/', authenticate, depositController.getAll);
router.get('/all', authenticate, authorize('admin'), depositController.getAllAdmin);
router.get('/:id', authenticate, depositController.getById);
router.post('/', authenticate, transactionLimiter, validate(createDeposit), depositController.create);
router.put('/:id/confirm', authenticate, authorize('admin'), depositController.confirm);
router.put('/:id/cancel', authenticate, depositController.cancel);

module.exports = router;
