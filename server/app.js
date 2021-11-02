var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const TodoList = require('./models/todoList');


//db-configuration
//const url = 'mongodb://localhost:27017/todoListApp';
const uri = process.env.DB_URI;
const connect = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

connect.then((db) => {
  console.log('Connected correctly to server')
}, (err) => { console.log(err); });

var app = express();

//middlewares
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//routes
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

module.exports = app;
