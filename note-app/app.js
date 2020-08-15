const chalk = require('chalk');
const yargs = require('yargs');

yargs.version('1.1.0');

//console.log(chalk.green.inverse.bold('Success!'));
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
  handler: function(argv) {
    console.log('Adding a new note!', argv.title);
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log('Remove the note');
  }
});

yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function() {
    console.log('Listing out all note');
  }
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function() {
    console.log('Reading a note');
  }
});

console.log(yargs.argv);