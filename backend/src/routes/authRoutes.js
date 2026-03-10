const router = require('express').Router();
const authController = require('../controllers/authController');
const { authenticate } = require('../middlewares/authMiddleware');
const { validate } = require('../middlewares/validator');
const { register, login, forgotPassword, resetPassword, verifyOTP, resendOTP } = require('../validators/authValidator');

router.post('/register', validate(register), authController.register);
router.post('/verify-otp', validate(verifyOTP), authController.verifyOTP);
router.post('/resend-otp', validate(resendOTP), authController.resendOTP);
router.post('/login', validate(login), authController.login);
router.post('/logout', authenticate, authController.logout);
router.post('/refresh-token', authController.refreshToken);
router.post('/forgot-password', validate(forgotPassword), authController.forgotPassword);
router.post('/reset-password', validate(resetPassword), authController.resetPassword);
router.get('/me', authenticate, authController.getMe);

module.exports = router;
