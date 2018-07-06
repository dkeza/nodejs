console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
let command = argv._[0];
console.log(command);
console.log("process.argv", process.argv);
console.log("yargs.argv", argv);

if (command === 'add') {
    let success = false;
    success = notes.addNote(argv.title, argv.body);
    if (success) {
        console.log("Note saved.")
    } else {
        console.log("Note not saved.")
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.readNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Unknown');
}