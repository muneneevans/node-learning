const fs = require("fs")
const chalk = require("chalk")
const getNotes = () => {
	return "Your notes..."
}

const newNote = (title, description) => {
	return listNotes((notes) => {
		let newNotes = [...notes, { title, description }]

		return fs.writeFile(
			"notes/notes.json",
			JSON.stringify(newNotes),
			{},
			() => {
				return true
			}
		)
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
