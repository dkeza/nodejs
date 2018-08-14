const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');

const todos = [
    { _id: new ObjectID(), text: 'First test todo'},
    { _id: new ObjectID(), text: 'Second test todo'}
];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        Todo.insertMany(todos);
    }).then(() => done());
};

module.exports = {todos, populateTodos};