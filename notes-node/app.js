console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

let res = notes.AddNote();
console.log(res);
// let user = os.userInfo();

// fs.appendFileSync('greeting.txt', `Hello ${user.username}! You are ${notes.age}`);