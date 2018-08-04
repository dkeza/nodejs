let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');
const {ObjectID} = require('mongodb');

let app = express();
const port = process.env.PORT || 3000;

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

app.delete('/todos/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        console.log('not valid id!');
        res.status(404).send('');
        return;
    }
    Todo.findByIdAndRemove(id).then((todo) => {
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
});


app.listen(port, () => {
    console.log(`Started on port ${port}`);
})

module.exports = {app};