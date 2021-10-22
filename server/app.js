var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const TodoList = require('./models/todoList');
var indexRouter = require('./routes/index');

//db-configuration
const url = 'mongodb://localhost:27017/todoListApp';
const connect = mongoose.connect(url);

connect.then((db) => {
  console.log('Connected correctly to server')
}, (err) => { console.log(err); });

var app = express();

//middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//routes
app.use('/', indexRouter);

module.exports = app;
