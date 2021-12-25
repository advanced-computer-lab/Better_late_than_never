const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    cardNumber: String,
    cardName: String,
    expireMonth: String,
    expireYear: String,
    cvv: String,
    userId: String
  },
  { timestamps: true }
);

const payment = mongoose.model("Payment", PaymentSchema);

module.exports = payment;
