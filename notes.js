const fs = require('fs');
const getNotes = () => 'Your notes...';

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
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json').toString());
  } catch (e) {
    return [];
  }
};

module.exports = { getNotes, addNote };
