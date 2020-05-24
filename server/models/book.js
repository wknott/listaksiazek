const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: { 
    type: String,
    required: true
  }, 
  date: {
    type: Date,
    required:true,
    default: Date.now
  }
})

module.exports = mongoose.model('Book', bookSchema)