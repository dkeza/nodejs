const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

let id = 'b5b6c90cce99e4c04c4c0cd';

User.findById(id).then((todo) => {
    if (!todo) {
        console.log('Id not found');
        return
    }
    console.log('User by id: ', todo);
}).catch((e) => {
    console.log(e);
});

// let id = '5b5f4500630f33602c9e8ad22';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         console.log("Id not found");
//         return
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));