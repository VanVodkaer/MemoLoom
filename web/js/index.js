import { config } from "./config.js";

let notedata;

const notedataXHR = new XMLHttpRequest();
notedataXHR.open("GET", `${config.apiURL}` + "notedata");
notedataXHR.addEventListener("loadend", () => {
  // 1. 获取现有笔记列表
  notedata = notedataXHR.response;
});

notedataXHR.send();
// 2. 渲染笔记列表

// 3. 响应用户操作
