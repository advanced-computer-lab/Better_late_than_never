const mongoose = require("mongoose");

const AvailabilitySchema = new mongoose.Schema(
  {
    start_time: String,
    end_time: String,
    doctor_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const availability = mongoose.model("Availability", AvailabilitySchema);

module.exports = availability;
