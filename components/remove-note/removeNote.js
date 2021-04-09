const { errorMsg, successMsg } = require('../text-styles.js');
const { loadNotes, saveNotes, findNote } = require('../utils.js');

const removeNote = (title) => {
  let notes = loadNotes();

  if (!findNote(notes, title)) return;

  notes = notes.filter((note) => note.title !== title);
  saveNotes(notes);

  console.log(successMsg('Note removed!'));
};

module.exports = removeNote;
