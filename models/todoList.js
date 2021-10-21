const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const todoListSchema = new Schema({

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