const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/qqmusic')
const db = mongoose.connection
module.exports = db
