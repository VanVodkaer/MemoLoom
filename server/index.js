// index.js 程序主入口

const config = require("./config.js");

const express = require("express");
const cors = require("cors");

const database = require("./database.js");
const router = require("./router.js");

// 初始化数据库
database.initDatabase();
database.heartBeat();

// 初始化服务器
const server = express();
// 允许跨域请求
server.use(cors());

// 路由中间件
server.use("/api", router);

server.listen(config.SERVER_PORT, () => {
  console.log("服务器启动成功!");
});
