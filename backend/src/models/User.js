const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    f_name: String,
    l_name: String,
    userName: String,
    password: String,
    address: String,
    countryCode: Number,
    email: String,
    mobileNumber: Number,
    telNumber: Number,
    passportNumber: String,
  },
  { timestamps: true }
);

const user = mongoose.model("User", UserSchema);

module.exports = user;
