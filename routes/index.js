var express = require('express');
var router = express.Router();

const todoLists = [ 
    
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
            titel: "three",
            content: "3rd item in todo-list",
            dateLastEdited: 123
        }
]

/* GET all todo-lists */
router.get('/api', (req, res) => {
  res.json(todoLists)
});

/*GET a specific todo-list */
router.get('/api/:id', function(req, res) {
    const id = req.params.id;
    const listId = todoLists.find((list) => {
        return list.itemId == id; 
    })
    if (!listId) {
        res.statusCode = 404;
        res.statusMessage = 'Not Found'
        res.end('Not found')
    } else {
        res.json(listId)
    }

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

/* router.delete('/api/:id', (req, res) => {
    res.statusCode = 200;
    res.json(todoLists);
}) */

module.exports = router;
