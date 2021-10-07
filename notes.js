const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return loadNotes();
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

const listNotes = () =>{
    console.log(chalk.white.bgBlue('listing all notes'));
    const notes = loadNotes();
    notes.forEach((note)=>console.log(note.title))
}


const readNotes = (title) =>{
    const notes = loadNotes()
    console.log(chalk.white.bgBlue('Reading notes'));
    const foundNote = notes.find((note) => note.title === title)
    if(foundNote){
        console.log(chalk.greenBright(foundNote.title + ' found'))
        console.log(chalk.white.bgCyan(foundNote.body))
    } else {
        console.log(chalk.red('note not found'))
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
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}