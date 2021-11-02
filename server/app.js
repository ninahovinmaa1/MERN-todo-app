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

const uri = "mongodb+srv://new-user-123:12345@cluster0.aknhk.mongodb.net/todoListApp?retryWrites=true&w=majority"
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
