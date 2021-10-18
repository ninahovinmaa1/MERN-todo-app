var express = require('express');
var router = express.Router();
var TodoList = require('../models/todoList');

let todoLists = [ 
    
        {
            itemId: 1,
            title: "one",
            content: "1st item in todo-list",
            dateLastEdited: 123
        },
    
        {
            itemId: 2,
            title: "two",
            content: "2nd item in todo-list",
            dateLastEdited: 123
        },

        {
            itemId: 3,
            title: "three",
            content: "3rd item in todo-list",
            dateLastEdited: 123
        }
]

/* GET all todo-lists */
router.get('/api', (req, res) => {
    res.statusCode = 200;
  res.json(todoLists);
});

/*GET a specific todo-list */
router.get('/api/:id', function(req, res) {
    const id = req.params.id;
    const listId = todoLists.find((list) => {
        return list.itemId == id; 
    })
    if (!listId) {
        res.statusCode = 404;
        res.end('Not found')
    } else {
        res.json(listId)
    }

})

/* PUT modify a specific todo-list */
router.put('/api/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let list = todoLists.find( c => c.itemId === id);
    //if no list with given id found:
    if (!list) {
        res.statusCode = 404;
        res.end('Not found');
    //modify the list with given id, return modified item
    } else {
        let editedListItem = todoLists[id -1];
        const updatedTitle = req.body.title;
        const updatedContent = req.body.content;
        const updatedDateLastEdited = 567 // todo correct date

        editedListItem.title = updatedTitle;
        editedListItem.content = updatedContent;
        editedListItem.dateLastEdited = updatedDateLastEdited;

        res.json(editedListItem);
    }
} )

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
        res.end('end 1');
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
