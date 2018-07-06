const fileName = "notes-data.json";
const fs = require('fs');

let readNotes = () => {
    let notes = [];
    if (fs.existsSync(fileName)) {
        try {
            notes = JSON.parse(fs.readFileSync(fileName));
        } catch(e) {
            console.log(e);
        }
    }
    return notes;
}

let isNoteValid = (title, notes) => {
    return (notes.length === 0 || (notes.length>0 && !(notes.filter(note => note.title === title).length>0)));
}

let saveNote = (title, body, notes) => {
    notes.push({
        title,
        body
    });
    fs.writeFileSync(fileName, JSON.stringify(notes));
}

let addNote = (title, body) => {
    let notes = [], success = false;
    notes = readNotes();
    if (isNoteValid(title, notes)) {
        saveNote(title, body, notes);
        success = true;
    }
    return success;
}

let getAll = (title, body) => {
    console.log('Get all');
}

let readNote = (title) => {
    console.log('Read note', title);
}

let removeNote = (title) => {
    console.log('Remove note', title);
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};