const yargs = require('yargs');
const addNote = require('./components/add-note/addNote.js');
const removeNote = require('./components/remove-note/removeNote.js');
const showList = require('./components/show-list/show-list.js');
const readNote = require('./components/read-note/readNote.js');

const title = {
  describe: 'Note title',
  demandOption: true,
  alias: 't',
  type: 'string',
};

const body = {
  describe: 'Note body',
  demandOption: true,
  alias: 'b',
  type: 'string',
};

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title,
    body,
  },
  handler: ({ title, body }) => addNote(title, body),
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title,
  },
  handler: ({ title }) => removeNote(title),
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title,
  },
  handler: ({ title }) => readNote(title),
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List of notes',
  handler: () => showList(),
});

yargs.parse();
