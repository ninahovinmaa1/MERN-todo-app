var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

var TodoLists = require('../models/todoList');

/* let todoLists = [ 
    
        {
            title: "one",
            content: "1st item in todo-list",
            dateLastEdited: 123
        },
    
        {
            title: "two",
            content: "2nd item in todo-list",
            dateLastEdited: 123
        }
] */

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
    const { title, content, dateLastEdited } = req.body;

    TodoLists.findByIdAndUpdate(
        id,
        {
            title,
            content,
            dateLastEdited
        },
        {new: true}
    )
    .then((list) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(list)
    })
})

/*POST, create a new todo-list*/ //expects json in the res body {"name": "soup", "description": "delicious asian fish soup"}
router.post('/api/', (req, res) => {
    if (!req.body) {
       res.statusCode = 400; 
       return;
    }
    res.statusCode = 200;
    todoLists.push(req.body);
    res.json(todoLists);
    
})

/*DELETE a specific todo-list */
router.delete('/api/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const list = todoLists.find( c => c.itemId === id);
    //if no list with given id found:
    if (!list) {
        res.status = 404;
    //remove the list with given id, return deleted item
    } else {
        const index = todoLists.indexOf(list);
        todoLists.splice(index, 1);
        res.statusCode = 200;
        //return the deleted item
        res.json(list);
    }
})

module.exports = router;
