// const http = require("http");
// const url = require("url");
const express = require("express");
const cors = require("cors");
const config = require("./config.js");
const read = require("./read.js");

const server = express();
//允许跨域请求
server.use(cors());

server.on("request", async (req, res) => {
  const parsedUrl = url.parse(req.url, true); // 使用url.parse解析请求URL
  const relativePath = parsedUrl.pathname; // 获取相对路径（请求的路径部分）

  if (relativePath === "/notedata") {
    const notedata = await read.readNoteList("/notedata");

    const response = {
      title: notedata,
    };

    res.setHeader("Access-Control-Allow-Origin", "*"); // 允许所有来源
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    res.end(JSON.stringify(response));
  } else {
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    res.end();
  }
});

server.on(config.SERVER_PORT, () => {
  console.log("Server Start");
});
