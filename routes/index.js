var express = require('express');
var router = express.Router();

const todoLists = [ 
    {
        todoList1: {
            itemId: 1,
            title: "one",
            content: "1st item in todo-list"
        }
    },

    {
        todoList2: {
            itemId: 2,
            title: "two",
            content: "2nd item in todo-list"
        }
    }, 

    {
        todoList3: {
            itemId: 3,
            titel: "three",
            content: "3rd item in todo-list"
        }
    }
]

/* GET all todo-lists */
router.get('/', function(req, res, next) {
  res.json(todoLists)
});

module.exports = router;
