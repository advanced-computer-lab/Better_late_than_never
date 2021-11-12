const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true
  },
  departureTime: {
    type: Number,
    required: true
  },
  arrivalTime: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required:true
  },
  noOfEconomySeats: {
    type: Number,
    required:true
  },
  noOfBuseinessSeats: {
    type: Number,
    required:true
  },
  airport: {
    type: String,
    required:true
  }
});

module.exports = Flight = mongoose.model('flight', FlightSchema);