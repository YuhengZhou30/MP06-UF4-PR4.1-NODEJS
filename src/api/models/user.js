const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  displayName: String,
  reputation: Number,
  creationDate: Date,
  location: String,
  aboutMe: String,
});


const User = mongoose.model('User', UserSchema);

module.exports = User;
