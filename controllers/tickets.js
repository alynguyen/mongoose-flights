var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
  newTicket,
  addTicket
};

function newTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('tickets/new', {
      title: 'Add Ticket',
      flight
    });
  });
}


