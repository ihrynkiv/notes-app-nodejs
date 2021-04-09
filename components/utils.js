const fs = require('fs');

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

module.exports = { loadNotes, saveNotes };
