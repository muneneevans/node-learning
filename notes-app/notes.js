const fs = require("fs")
const chalk = require("chalk")
const validator = require("validator")
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

const deletNote = (title) => {
	return listNotes((notes) => {
		let index = notes.findIndex((item) => item.title === title)
		if (index > -1) {
			notes.splice(index, 1)
			return fs.writeFile("notes/notes.json", JSON.stringify(notes), {}, () => {
				return true
			})
		} else {
			return false
		}
	})
}

const listNotes = (callback) => {
	return fs.readFile("notes/notes.json", {}, (error, data) => {
		if (error) {
			return callback([])
		} else {
			return callback(JSON.parse(data.toString()))
		}
	})
}

module.exports = {
	newNote,
	getNotes,
	listNotes,
	deletNote,
}
