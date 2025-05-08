const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

router.get('/', stockController.getAllStocks);
router.post('/', stockController.addStock);
router.delete('/:id', stockController.deleteStock);

module.exports = router;
