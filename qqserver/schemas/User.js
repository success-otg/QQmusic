const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  avatar: {
    type: String,
    default: 'default.jpg'
  },
  id: Number,
  createAt: String,
  phone: String
})

module.exports = userSchema
