const Flight = require('../models/flight');

module.exports = {
  newFlight,
  index,
  create
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  let flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.render('flights/new');
    res.redirect('/flights');
  });
}

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', {flights})
  });
}

function newFlight(req, res) {
  res.render('flights/new', {title: 'flights#new'});
}