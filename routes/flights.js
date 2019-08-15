const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flights');

// Get the new flight page
router.get('/', flightsController.index);
router.get('/new', flightsController.newFlight);
router.post('/', flightsController.create);

module.exports = router;
