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
	handler: function () {
		console.log(chalk.blue("add a new note"))
	},
})

// Create remove command
yargs.command({
	command: "remove",
	describe: "Remove a note",
	handler: function () {
		console.log(chalk.red("remove a new note"))
	},
})

// Create list command
yargs.command({
	command: "list",
	describe: "Show avaialable notes",
	handler: function () {
		console.log(chalk.green(["\nnote1", "\nnote2", "\nnote3"]))
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

// console.log(process.argv)

// console.log(yargs.argv)
console.log(yargs.argv)