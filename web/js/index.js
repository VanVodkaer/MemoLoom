import { config } from "./config.js";

function renderElements(index, title, create = " ", edit = " ") {
  //外框
  const appendElement = document.createElement("div");
  appendElement.classList.add("note-list-body-box");
  appendElement.id = "li" + index;

  //复选框外框
  const listselectElement = document.createElement("div");
  listselectElement.classList.add("note-list-body list-select");
  listselectElement.innerText = title;

  //复选框
  const checkboxElement = document.createElement("input");
  checkboxElement.classList.add("list-select-btn");
  checkboxElement.id = "ch" + index;
  checkboxElement.type = "checkbox";

  //标题
  const selectElement = document.createElement("div");
  selectElement.classList.add("note-list-body list-note-title");
  checkboxElement.id = "ti" + index;
  selectElement.innerText = title;

  //创建日期
  const createdateElement = document.createElement("div");
  createdateElement.classList.add("note-list-body list-create-date");
  createdateElement.innerText = title;
}

const notedataXHR = new XMLHttpRequest();
notedataXHR.open("GET", `${config.apiURL}` + "notedata");
notedataXHR.addEventListener("loadend", () => {
  // 1. 获取现有笔记列表
  let notedata = JSON.parse(notedataXHR.response);
  // 2. 渲染笔记列表
  // 在nav后面追加
  const note_list_head_box = document.querySelector(".note-list-head-box");
  notedata.title.forEach((title, index) => {});
});

notedataXHR.send();

// 3. 响应用户操作
