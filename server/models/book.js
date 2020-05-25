const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  author: { 
    type: String,
    required: true
  }, 
  dateOfRead: {
    type: Date
  }
})

module.exports = mongoose.model('Book', bookSchema)