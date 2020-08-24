const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
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

const removeNote = (title) => {
  const notesToKeep = loadNotes();
  let notes = notesToKeep.filter((note) => note.title !== title);
  if(notesToKeep.length > notes.length) {
    console.log(chalk.green.inverse('Note removed!'));
    saveNotes(notes);
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
}

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse('Your notes'));
  notes.forEach(note => console.log(note.title));
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = JSON.parse(dataBuffer.toString());
    return dataJSON;
  } catch(e) {
    return [];
  }
}

const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if(note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse('Note not found!'));
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};

module.exports = {
  addNote,
  listNotes,
  readNotes,
  removeNote,
};