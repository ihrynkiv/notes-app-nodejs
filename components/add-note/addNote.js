const { errorMsg, successMsg } = require('../text-styles.js');
const { loadNotes, saveNotes, isTitleMatch } = require('../utils.js');

const addNote = (title, body) => {
  const notes = loadNotes();
  const isDuplicateNote = isTitleMatch(notes, title);

  if (isDuplicateNote) {
    console.log(errorMsg('Note title taken'));
    return;
  }

  notes.push({
    title,
    body,
  });

  saveNotes(notes);
  console.log(successMsg('New note added'));
};

module.exports = addNote;
