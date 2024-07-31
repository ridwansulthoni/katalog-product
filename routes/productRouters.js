const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get('/', productController.getAllProduct);
router.post('/', productController.addProduct);
router.put('/', productController.updateProduct);
router.delete('/', productController.deleteProduct);

module.exports = router;
