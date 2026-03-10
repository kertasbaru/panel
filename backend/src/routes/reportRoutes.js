const router = require('express').Router();
const reportController = require('../controllers/reportController');
const { authenticate } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');

router.get('/sales', authenticate, authorize('admin'), reportController.getSalesReport);
router.get('/commission', authenticate, authorize('admin'), reportController.getCommissionReport);
router.get('/summary', authenticate, authorize('admin'), reportController.getSummary);
router.get('/export', authenticate, authorize('admin'), reportController.exportReport);

module.exports = router;
