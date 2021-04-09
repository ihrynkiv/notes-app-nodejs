const { errorMsg, successMsg } = require('../text-styles.js');
const { loadNotes, saveNotes, isTitleMatch } = require('../utils.js');

const removeNote = (title) => {
  let notes = loadNotes();
  const isExist = isTitleMatch(notes, title);

  if (!isExist) {
    console.log(errorMsg('Note not found!'));
    return;
  }

  notes = notes.filter((note) => note.title !== title);
  saveNotes(notes);

  console.log(successMsg('Note removed!'));
};

module.exports = removeNote;
