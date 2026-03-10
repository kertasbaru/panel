const router = require('express').Router();
const productController = require('../controllers/productController');
const { authenticate } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');
const { validate } = require('../middlewares/validator');
const { createProduct, updateProduct } = require('../validators/productValidator');

router.get('/', productController.list);
router.get('/:id', productController.getById);
router.get('/category/:slug', productController.getByCategory);
router.post('/', authenticate, authorize('admin'), validate(createProduct), productController.create);
router.put('/:id', authenticate, authorize('admin'), validate(updateProduct), productController.update);
router.delete('/:id', authenticate, authorize('admin'), productController.delete);
router.post('/sync', authenticate, authorize('admin'), productController.sync);

module.exports = router;
