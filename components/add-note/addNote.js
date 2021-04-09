const fs = require('fs');
const loadNotes = require('../utils.js');

const addNote = (title, body) => {
  const notes = loadNotes();
  const isDuplicateNote = notes.some((note) => note.title === title);

  if (isDuplicateNote) {
    console.log('Note title taken');
    return;
  }

  notes.push({
    title,
    body,
  });

  saveNotes(notes);
  console.log('New note added');
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('data/notes.json', dataJSON);
};

module.exports = addNote;
