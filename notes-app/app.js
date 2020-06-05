const validator = require("validator")
const notes = require("./notes.js")
const chalk = require("chalk")
const yargs = require("yargs")

// customize yargs argumen
yargs.version("1.1.0")

//Create add comman

// Create add command
yargs.command({
	command: "add",
	describe: "Add a new note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
		description: {
			describe: "Note description",
			demandOption: true,
			type: "string",
		},
	},
	handler: function (argv) {
		notes.newNote(argv.title, argv.description)
	},
})

// Create remove command
yargs.command({
	command: "remove",
	describe: "Remove a note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
	},
	handler: function (argv) {
		notes.deletNote(argv.title)
	},
})

// Create list
yargs.command({
	command: "list",
	describe: "Show avaialable notes",
	handler: function () {
		notes.listNotes((data) => {
			console.log(data)
		})
		console.log(chalk.black.bgGreen("Listing successful."))
	},
})

// Create read command
yargs.command({
	command: "read",
	describe: "Read notes from source",
	handler: function () {
		console.log(
			chalk.green([
				"lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eusmod tempor incididunct trabore et dolore magna alique",
			])
		)
	},
})
yargs.command({
	command: "commands",
	describe: "List command and such",
	handler: function () {
		console.log(yargs.argv)
	},
})

yargs.parse()
