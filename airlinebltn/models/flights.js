const mongoose = require('mongoose');

const flightschema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true
  },
  departuretime: {
    type: Number,
    required: true
  },
  arrivaltime: {
    type: Number,
    required: true
  },
  dates: {
    type: Date
  },
  numberOfEconomy: {
    type: Number
  },
  nofBusclass: {
    type: Number
  },
  airports: {
    type: String,
    
  }
});

module.exports = Book = mongoose.model('book', BookSchema);