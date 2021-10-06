const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return 'Your changed notes....';
}


const addNote =  (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title)

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.inverse.green('note added'));
    } else{
        console.log(chalk.red('note already taken'))
    }
}

const removeNote = (title) => {
    
    const notes = loadNotes();
    const notesToSave = notes.filter((note) => note.title !== title);
    if(notes.length > notesToSave.length){
        console.log(chalk.bgGreen('Note removed'))
        saveNotes(notesToSave);
    } else{
        console.log(chalk.red.inverse('No note found'))
    }
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes =  () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}