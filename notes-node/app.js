console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

let fArray = _.uniq(['Mike',1,2,3,'Mike',3])

console.log(fArray);

// console.log(_.isString(true));
// console.log(_.isString("x"));
//let res = notes.AddNote();
//console.log(res);
// let user = os.userInfo();

// fs.appendFileSync('greeting.txt', `Hello ${user.username}! You are ${notes.age}`);