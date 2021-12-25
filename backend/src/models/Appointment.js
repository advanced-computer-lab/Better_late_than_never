const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(
  {
    phone_number: String,
    time_slot_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Availability",
      default: null,
    },
    disease: String,
    time: String,
    date: String,
    link: String,
    doctor_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    department_id: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
    patient_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

const appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = appointment;
