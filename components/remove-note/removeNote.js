const fs = require('fs');
const { loadNotes, saveNotes } = require('../utils.js');

const removeNote = (title) => {
  let notes = loadNotes();
  const isExist = notes.some((note) => note.title === title);

  if (!isExist) {
    console.log('Note not found!');
    return;
  }

  notes = notes.filter((note) => note.title !== title);
  saveNotes(notes);

  console.log('Note was removed');
};

module.exports = removeNote;
