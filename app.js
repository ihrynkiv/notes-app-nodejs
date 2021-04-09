const yargs = require('yargs');
const addNote = require('./components/add-note/addNote.js');
const removeNote = require('./components/remove-note/removeNote.js');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: ({ title, body }) => addNote(title, body),
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: ({ title }) => removeNote(title),
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Something note');
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List of notes',
  handler: function () {
    console.log('note1\nnote2\nnote3\nnote4');
  },
});

yargs.parse();
