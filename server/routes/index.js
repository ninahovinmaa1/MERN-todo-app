var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

var TodoLists = require('../models/todoList');

/* GET all todo-lists */
router.get('/api', (req, res) => {
    TodoLists.find({})
    .then((todoLists) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(todoLists)
    })
});

/*GET a specific todo-list */
router.get('/api/:id', (req, res) => {
    const id = req.params.id;
    TodoLists.findById(id)
    .then((list) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(list)
    })
})

/* PUT modify a specific todo-list */
router.put('/api/:id', (req, res) => {
    const id = req.params.id;
    const { title, content } = req.body;

    TodoLists.findByIdAndUpdate(
        id,
        {
            title,
            content
        },
        {new: true}
    )
    .then((list) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(list)
    })
})

/*POST, create a new todo-list*/ //expects json in the req.body
router.post('/api/', (req, res) => {
    const createdList = req.body;
    TodoLists.create(createdList)
    .then((list) => {
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.redirect(200, "/api");
    })    
})

/*DELETE a specific todo-list */
router.delete('/api/:id', (req, res) => {
    TodoLists.findByIdAndRemove(req.params.id)
    .then((list) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(list);
    })
})

module.exports = router;
