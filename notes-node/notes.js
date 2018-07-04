console.log("Starting notes.js");

let addNote = (title, body) => {
    console.log('Adding note', title, body);
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