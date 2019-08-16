var express = require('express');
var router = express.Router();
var destController = require('../controllers/destination');

router.post('/flights/:id/destination', destController.create);

module.exports = router;