console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs
    .command('add', 'Add a new note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        },
        body: {
            describe: 'Body of note',
            demand: true, 
            alias: 'b'
        }
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        }
    })
    .help()
    .argv;

let success = false;
let command = argv._[0];
console.log(command);
console.log("process.argv", process.argv);
console.log("yargs.argv", argv);

if (command === 'add') {
    success = notes.addNote(argv.title, argv.body);
    if (success) {
        console.log("Note saved.")
    } else {
        console.log("Note not saved.")
    }
} else if (command === 'list') {
    console.log(notes.getAll());
} else if (command === 'read') {
    let note = {};
    note = notes.readNote(argv.title);
    if (note==undefined) {
        console.log("Note not found");
    } else {
        console.log(note);
    }
} else if (command === 'remove') {
    success = notes.removeNote(argv.title);
    if (success) {
        console.log("Note deleted.")
    } else {
        console.log("Note not deleted.")
    }
} else {
    console.log('Unknown');
}