// router.js 响应客户端请求中间件

const express = require("express");
const database = require("./database.js");

const router = express.Router();

// 读取所有笔记
router.get("/notedata", (req, res, next) => {
  console.log(database.noteData());
  req.next();
});

module.exports = router;
