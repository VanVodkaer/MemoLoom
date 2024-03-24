const fs = require("fs").promises;
const path = require("path");

function readNoteList(pathname) {
  const notesDir = path.join(__dirname, pathname);

  return fs
    .access(notesDir)
    .then(() => fs.readdir(notesDir))
    .catch((err) => {
      if (err && err.code === "ENOENT") {
        return fs.mkdir(notesDir, { recursive: true }).then(() => []);
      }
      throw err;
    });
}

module.exports = { readNoteList };
