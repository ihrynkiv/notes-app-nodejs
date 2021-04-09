const fs = require('fs');

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('data/notes.json').toString());
  } catch (e) {
    return [];
  }
};

module.exports = loadNotes;
