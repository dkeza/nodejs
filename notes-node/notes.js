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
    if (title !== undefined && body !== undefined) {
        notes.push({
            title,
            body
        });
    };
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

let getAll = () => {
    return readNotes();
}

let readNote = (title) => {
    let note = undefined, notes = readNotes();
    if (notes.length>0) {
        filteredNotes = notes.filter(note => note.title === title);
        note = filteredNotes[0];
    }
    return note;
}

let removeNote = (title) => {
    let success = false, notes = [], filteredNotes = [];
    notes = readNotes();
    if (notes.length>0) {
        filteredNotes = notes.filter(note => note.title !== title);
        if (notes.length !== filteredNotes.length) {
            saveNote(undefined, undefined, filteredNotes);
            success = true;
        }
        
    }
    return success;
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};