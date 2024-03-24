const http = require("http");
const url = require("url");
const read = require("./read.js");

// 1. 启动服务端
// 2. 监听笔记列表请求
// 3. 返回数据

const server = http.createServer();

server.on("request", async (req, res) => {
  const parsedUrl = url.parse(req.url, true); // 使用url.parse解析请求URL
  const relativePath = parsedUrl.pathname; // 获取相对路径（请求的路径部分）

  if (relativePath === "/notedata") {
    const notedata = await read.readNoteList("/notedata");
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    res.end(JSON.stringify(notedata));
  } else {
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    res.end(relativePath);
  }
});

server.listen(3000, () => {});
