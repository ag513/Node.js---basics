const yargs = require('yargs')
const notes = require('./notes.js');

yargs.command({
    command: 'add',
    describe: 'Adding notes',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note description',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log(argv.title, argv.body)
        notes.addNote(argv.title, argv.body)
    }
});

yargs.command({
    command: 'remove',
    describe: 'Removing notes',
    builder: {
        title: {
            describe: 'title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'get',
    describe: 'getting notes',
    builder: {
        title: {
            describe: 'get',
            demandOption: false,
            type: 'string'
        }
    },
    handler(){
        notes.listNotes();
    }
});


yargs.parse();
// console.log(yargs.argv);