const mongoose = require("mongoose");

const SeatsSchema = new mongoose.Schema(
  {
    economy_seats: Array,
    business_class_seats: Array,
    first_class_seats: Array,
    flightId: String,
    isReserved: Boolean
  },
  { timestamps: true }
);

const seat = mongoose.model("Seat", SeatsSchema);

module.exports = seat;
