// DEPENDENCIES
//==================

const mongoose = require('mongoose');

// NEW SCHEMA
//================

const newUser = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true}
})

const User = mongoose.model('user', newUser)


module.exports = User;
