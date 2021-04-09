const fs = require('fs');
const { loadNotes, saveNotes } = require('../utils.js');

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

module.exports = addNote;
