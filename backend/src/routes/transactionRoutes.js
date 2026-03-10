const router = require('express').Router();
const transactionController = require('../controllers/transactionController');
const { authenticate } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');
const { validate } = require('../middlewares/validator');
const { createTransaction, inquiry } = require('../validators/transactionValidator');

router.get('/', authenticate, transactionController.list);
router.get('/all', authenticate, authorize('admin'), transactionController.listAll);
router.get('/:id', authenticate, transactionController.getById);
router.post('/', authenticate, validate(createTransaction), transactionController.create);
router.post('/inquiry', authenticate, validate(inquiry), transactionController.inquiry);

module.exports = router;
