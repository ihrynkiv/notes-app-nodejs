const { primaryColorMsg, warningMsg } = require('../text-styles.js');
const { loadNotes } = require('../utils.js');

const showList = () => {
  const notes = loadNotes();

  if (!notes.length) {
    console.log(warningMsg('No note found!'));
  }
  notes.forEach((note, i) => {
    console.log(primaryColorMsg(`${i + 1}. ${note.title}`));
  });
};

module.exports = showList;
