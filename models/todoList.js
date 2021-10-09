const mongoose = require('mongoose');


const todoListSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  }, 
  content: {
    type: String,
    required: true
  }, 
  dateLastEdited: {
      type: Date
  }

})

module.exports = mongoose.model('TodoList', todoListSchema);