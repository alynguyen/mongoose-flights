var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
  newTicket,
  addTicket,
};

function newTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('tickets/new', {
      title: 'Add Ticket',
      flight
    });
  });
}

function addTicket(req, res) {
  let ticket = new Ticket(req.body);
  // ticket.flight.push(req.body.flight);
  console.log(ticket, req.body.flight);
  ticket.save(function(err) {
    if (err) return res.render('flights/:id/tickets/new');
      res.redirect(`/flights/${ticket.flight}`);
  });
}


// function show(req, res) {
//   Flight.findById(req.params.id, function (err, flight) {
//     res.render('flights/show', {title: 'Flight Detail', flight});
//     console.log('ran');
//   });
// }


// function create(req, res) {
//   for (let key in req.body) {
//     if (req.body[key] === '') delete req.body[key];
//   }
//   let flight = new Flight(req.body);
//   flight.save(function(err) {
//     if (err) return res.render('flights/new');
//     res.redirect('/flights');
//   });
// }