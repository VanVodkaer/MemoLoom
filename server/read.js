// 获取指定文件夹下的所有文件名，若不存在则创建该文件夹
// 函数接口 readNoteList
// 传入参数 文件路径
// 返回值 数组

const fs = require("fs").promises; // 使用Promise版本的fs模块
const path = require("path");

function readNoteList(pathname) {
  const notesDir = path.join(__dirname, pathname);

  // 异步获取文件列表，不存在则返回空数组
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
