const { primaryColorMsg, secondaryColorMsg } = require('../text-styles.js');
const { loadNotes } = require('../utils.js');

const showList = () => {
  const notes = loadNotes();
  notes.forEach((note, i) => {
    console.log(primaryColorMsg(`${i + 1}. ${note.title}`));
  });
};

module.exports = showList;
