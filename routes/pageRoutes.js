const express = require('express');

const portfolioController = require('../controllers/portfolioController');

const router = express.Router();

router.route('/').get(portfolioController.getPortfolio);
router.route('/add').post(portfolioController.addNewItem);

module.exports = router;