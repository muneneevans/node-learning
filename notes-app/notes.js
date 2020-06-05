const fs = require("fs")
const chalk = require("chalk")
const getNotes = () => {
	return "Your notes..."
}

const newNote = (title, description) => {
	fs.writeFile(`notes/${title}.txt`, `${title} \n${description}`, (e) => {
		console.log(e)
		console.log(chalk.black.bgBlue("new note saved."))
	})
}

const listNotes = (callback) => {
	return fs.readFile("notes/notes.json", {}, (error, data) => {
		return callback(JSON.parse(data.toString()))
	})
}

module.exports = {
	newNote,
	getNotes,
	listNotes,
}
