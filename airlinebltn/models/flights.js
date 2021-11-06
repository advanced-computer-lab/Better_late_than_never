const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightschema = new Schema({
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

