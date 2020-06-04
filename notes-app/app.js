const fs = require("fs")

fs.writeFileSync("notes.txt", "bark at the moon over and over")
fs.appendFileSync("notes.txt", "\nbark at the moon on a new line")

