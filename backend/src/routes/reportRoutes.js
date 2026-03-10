const router = require('express').Router();
const reportController = require('../controllers/reportController');
const { authenticate } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');

router.get('/sales', authenticate, authorize('admin'), reportController.sales);
router.get('/commission', authenticate, authorize('admin'), reportController.commission);
router.get('/summary', authenticate, authorize('admin'), reportController.summary);
router.get('/export', authenticate, authorize('admin'), reportController.export);

module.exports = router;
