let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

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
})

app.listen(3000, () => {
    console.log('Started on port 3000');
})


 
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