const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: Number,
    required: true
  },
  pass: {
    type: Number,
    required: true
  },
 
});

module.exports = User = mongoose.model('flight', UserSchema);