var express = require('express');
var router = express.Router();
var ticketsController = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketsController.newTicket);

module.exports = router;
