var express = require('express');
var router = express.Router();

const todoLists = [ 
    
        {
            itemId: 1,
            title: "one",
            content: "1st item in todo-list"
        },
    
        {
            itemId: 2,
            title: "two",
            content: "2nd item in todo-list"
        },

        {
            itemId: 3,
            titel: "three",
            content: "3rd item in todo-list"
        }
]

/* GET all todo-lists */
router.get('/', function(req, res, next) {
  res.json(todoLists)
});

/*GET a specific todo-list */
router.get('/:id', function(req, res) {
    const id = parseInt(req.params.id);
    const listId = todoLists.find((list) => {
        return list.itemId === id; 
    })
    res.json(listId)

})

module.exports = router;
