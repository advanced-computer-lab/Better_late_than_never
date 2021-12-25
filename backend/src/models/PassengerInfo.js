const mongoose = require("mongoose");

const PassengerSchema = new mongoose.Schema(
  {
    f_name: String,
    l_name: String,
    dob: String,
    passport: String,
    gender: String,
    cabin: String,
    avaliableSeats: Number,
    checkedBaggage: Number,
    userId: String,
    flightId: String,
    reservedSeats: Array
  },
  { timestamps: true }
);

const passenger = mongoose.model("Passenger", PassengerSchema);

module.exports = passenger;
