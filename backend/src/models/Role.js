const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

const role = mongoose.model("Role", RoleSchema);

module.exports = role;
