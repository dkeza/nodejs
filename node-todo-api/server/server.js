let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');
const {ObjectID} = require('mongodb');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then( (doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    }
    );
});

app.get('/todos', 
    (req, res) => {
        Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        console.log('not valid id!');
        res.status(404).send('');
        return;
    }
    console.log('id', id);
    Todo.findById(id).then((todo) => {
        console.log('findById', todo);
        if (todo) {
            res.status(200).send(todo);
        } else {
            console.log('id not found!');
            res.status(404).send('');
        }
    }, (e) => {
        res.status(400).send('');
    });
})

app.listen(3000, () => {
    console.log('Started on port 3000');
})

module.exports = {app};
 
// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// var newTodo = new Todo({
//     completed: false
// });

// newTodo.save().then( (doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//         console.log('UNable to save todo', e);
// });



// let newUser = new User({
//     email: "geri@yahoo.com"
// });

// newUser.save().then( (doc) => {
//     console.log("Saved user", doc);
// }, (e) => {
//     console.log("Unable to save User", e);
// });