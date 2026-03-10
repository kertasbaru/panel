const router = require('express').Router();
const { apiLimiter, authLimiter } = require('../middlewares/rateLimiter');

const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const transactionRoutes = require('./transactionRoutes');
const balanceRoutes = require('./balanceRoutes');
const depositRoutes = require('./depositRoutes');
const reportRoutes = require('./reportRoutes');
const settingRoutes = require('./settingRoutes');
const webhookRoutes = require('./webhookRoutes');
const notificationRoutes = require('./notificationRoutes');

router.use(apiLimiter);
router.use('/auth', authLimiter, authRoutes);
router.use('/users', userRoutes);
router.use('/products', productRoutes);
// /categories maps to productRoutes because product routes include /category/:slug endpoint
router.use('/categories', productRoutes);
router.use('/transactions', transactionRoutes);
router.use('/balance', balanceRoutes);
router.use('/deposits', depositRoutes);
router.use('/reports', reportRoutes);
router.use('/settings', settingRoutes);
router.use('/webhook', webhookRoutes);
router.use('/notifications', notificationRoutes);

module.exports = router;
