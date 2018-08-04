const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('5b657f670a1d0b21f820e655').then((todo) => {
    console.log(todo);
});