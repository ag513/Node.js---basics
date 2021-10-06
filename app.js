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
    handler: function (argv) {
        console.log(argv.title, argv.body)
        notes.addNote(argv.title, argv.body)
    }
});
