const fs = require("fs")
const chalk = require("chalk")
const validator = require("validator")
const getNotes = () => {
	return "Your notes..."
}

const newNote = (title, description) => {
	return listNotes((notes) => {
		let newNotes = [...notes]
		let found = notes.filter((item) => item.title === title)

		if (found.length === 0) {
			let newNotes = [...notes, { title, description }]
			fs.writeFile("notes/notes.json", JSON.stringify(newNotes), {}, () => {
				return true
			})
			console.log(chalk.black.bgGreen("Note added"))
		} else {
			console.log(chalk.black.bgRed("Note already exists"))
		}
	})
}

const deletNote = (title) => {
	return listNotes((notes) => {
		let index = notes.findIndex((item) => item.title === title)
		if (index > -1) {
			notes.splice(index, 1)
			console.log(chalk.black.bgGreen("Note removed"))

			return fs.writeFile("notes/notes.json", JSON.stringify(notes), {}, () => {
				return true
			})
		} else {
			console.log(chalk.black.bgYellow("Note does not exist"))
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
