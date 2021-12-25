const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

const department = mongoose.model("Department", DepartmentSchema);

module.exports = department;
