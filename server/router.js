// router.js 响应客户端请求中间件

const express = require("express");
const database = require("./database.js");

const router = express.Router();

// 读取所有笔记
router.get("/notedata", async (req, res, next) => {
  try {
    const data = await database.noteData();
    // console.log(data);
    res.json(data); // 将查询结果以JSON格式发送给客户端
    next(); // 正确完成处理后调用next()继续后续中间件
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
    next(error); // 发生错误时，传递错误到错误处理中间件
  }
});

module.exports = router;
