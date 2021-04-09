const fs = require('fs');
const { errorMsg } = require('./text-styles.js');

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('data/notes.json').toString());
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('data/notes.json', dataJSON);
};

const isTitleMatch = (notes, title) =>
  notes.some((note) => note.title === title);

const findNote = (notes, title) => {
  const isExist = isTitleMatch(notes, title);
  if (!isExist) {
    console.log(errorMsg('Note not found!'));
    return false;
  }
  return true;
};

module.exports = { loadNotes, saveNotes, isTitleMatch, findNote };
