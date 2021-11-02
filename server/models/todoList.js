const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoListSchema = new Schema({
//timestamps are automatically created and updated

  title: {
    type: String,
    required: true
  }, 
  content: {
    type: String,
    required: true
  } 
}, {timestamps:true})

module.exports = mongoose.model('TodoList', todoListSchema);