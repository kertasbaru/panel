const router = require('express').Router();
const settingController = require('../controllers/settingController');
const { authenticate } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');

router.get('/', authenticate, authorize('admin'), settingController.getAll);
router.put('/', authenticate, authorize('admin'), settingController.update);

module.exports = router;
