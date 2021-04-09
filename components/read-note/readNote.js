const { primaryColorMsg, secondaryColorMsg } = require('../text-styles.js');
const { loadNotes, findNote } = require('../utils.js');

const readNote = (title) => {
  const notes = loadNotes();

  if (!findNote(notes, title)) return;

  const note = notes.find((note) => note.title === title);
  console.log(primaryColorMsg.bold(note.title));
  console.log(secondaryColorMsg(note.body));
};

module.exports = readNote;
