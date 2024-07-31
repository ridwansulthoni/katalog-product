const express = require('express');
const router = express.Router();
const categoriController = require('../controller/categoriController');

router.get('/', categoriController.getAllCategori);
router.post('/', categoriController.addCategori);
router.put('/', categoriController.updateCategori);
router.delete('/', categoriController.deleteCategori);

module.exports = router;
