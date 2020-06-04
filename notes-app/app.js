const validator = require("validator")
const notes = require("./notes.js")
const chalk = require("chalk")

// console.log(process.argv)
console.log(chalk.cyan(process.argv))

const comman = process.argv[2]
if (comman === "add") {
	console.log(chalk.white.bold("Add note"))
} else if (comman === "remove") {
	console.log(chalk.white.bold("Remove note"))
} else {
	console.log(chalk.cyan(argv))
}
