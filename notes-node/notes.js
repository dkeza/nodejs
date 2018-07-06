const fileName = "notes-data.json";
const fs = require('fs');

let addNote = (title, body) => {
    let note = {
        title,
        body
    };
    let notes = [];
    if (fs.existsSync(fileName)) {
        try {
            notes = JSON.parse(fs.readFileSync(fileName));
        } catch(e) {
            console.log(e);
        }
    }
    if (notes.length === 0 || (notes.length>0 && !(notes.filter(note => note.title === title).length>0))) {
        notes.push(note);
        fs.writeFileSync(fileName, JSON.stringify(notes));
        console.log('Adding note', notes);
    }
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