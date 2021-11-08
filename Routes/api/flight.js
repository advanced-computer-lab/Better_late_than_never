const express = require('express');
const router = express.Router();

// Load Book model
const Flight = require('../../models/flight');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('flight route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  Flight.find()
    .then(flight => res.json(flight))
    .catch(err => res.status(404).json({ noFlightsFound: 'No Flights found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
  Flight.findById(req.params.id)
    .then(flight => res.json(flight))
    .catch(err => res.status(404).json({ noFlightsFound: 'No Flights found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
  Flight.create(req.body)
    .then(flight => res.json({ msg: 'flight added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this flight' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  Flight.findByIdAndUpdate(req.params.id, req.body)
    .then(flight => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Flight.findByIdAndRemove(req.params.id, req.body)
    .then(flight => res.json({ mgs: 'Flight entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such Flight' }));
});

module.exports = router;