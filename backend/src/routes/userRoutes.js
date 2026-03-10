const router = require('express').Router();
const userController = require('../controllers/userController');
const { authenticate } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');
const { validate } = require('../middlewares/validator');
const { updateProfile, changePassword, changePin } = require('../validators/userValidator');

router.get('/', authenticate, authorize('admin'), userController.getAll);
router.put('/profile', authenticate, validate(updateProfile), userController.updateProfile);
router.put('/change-password', authenticate, validate(changePassword), userController.changePassword);
router.put('/change-pin', authenticate, validate(changePin), userController.changePin);
router.get('/:id', authenticate, userController.getById);
router.put('/:id/status', authenticate, authorize('admin'), userController.updateStatus);
router.delete('/:id', authenticate, authorize('admin'), userController.deleteUser);

module.exports = router;
