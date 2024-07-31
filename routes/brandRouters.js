const express = require('express');
const router = express.Router();
const brandController = require('../controller/brandController');

router.get('/', brandController.getAllBrand);
router.post('/', brandController.addBrand);
router.put('/', brandController.updateBrand);
router.delete('/', brandController.deleteBrand);

module.exports = router;
