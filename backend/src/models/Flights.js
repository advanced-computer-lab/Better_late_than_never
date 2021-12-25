const mongoose = require("mongoose");

const FlightSchema = new mongoose.Schema(
  {
    trip: String,
    flight_number: String,
    to: String,
    from: String,
    // stop: Number,
    dep_time: String,
    dep_date: Date,
    arr_time: String,
    arr_date: Date,
    ticket: Number,
    airport_terminal: String,
  },
  { timestamps: true }
);

const flight = mongoose.model("Flight", FlightSchema);

module.exports = flight;
