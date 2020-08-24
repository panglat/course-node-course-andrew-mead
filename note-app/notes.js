const fs = require('fs');
const chalk = require('chalk');

const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicatedNote = notes.find(note => note.title === title);
  if (!duplicatedNote) {
    const newNotes = [...notes, {title, body}];
    saveNotes(newNotes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
};

const removeNote = function(title) {
  const notesToKeep = loadNotes();
  let notes = notesToKeep.filter((note) => note.title !== title);
  if(notesToKeep.length > notes.length) {
    console.log(chalk.green.inverse('Note removed!'));
    saveNotes(notes);
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
}

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = JSON.parse(dataBuffer.toString());
    return dataJSON;
  } catch(e) {
    return [];
  }
}

const saveNotes = function(notes) {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};

module.exports = {
  addNote,
  removeNote,
};