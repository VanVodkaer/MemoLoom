import { config } from "./config.js";

function renderElements(index, title, create = " ", edit = " ") {
  const appendElement = document.createElement("div");
  appendElement.classList.add("note-list-body-box");
  appendElement.id = "li" + index;

  const listselectElement = document.createElement("div");
  listselectElement.classList.add("note-list-body", "list-select");

  const checkboxElement = document.createElement("input");
  checkboxElement.type = "checkbox";
  checkboxElement.classList.add("list-select-btn");
  checkboxElement.id = "ch" + index;

  const titleElement = document.createElement("div");
  titleElement.classList.add("note-list-body", "list-note-title");
  titleElement.id = "ti" + index;
  titleElement.textContent = title;

  const createdateElement = document.createElement("div");
  createdateElement.classList.add("note-list-body", "list-create-date");
  createdateElement.textContent = create;

  const editdateElement = document.createElement("div");
  editdateElement.classList.add("note-list-body", "list-last-edited");
  editdateElement.textContent = edit;

  const functionElement = document.createElement("div");
  functionElement.classList.add("note-list-body", "list-function-btn");

  const editbtnElement = document.createElement("button");
  editbtnElement.textContent = "编辑";
  const copybtnElement = document.createElement("button");
  copybtnElement.textContent = "复制";
  const delbtnElement = document.createElement("button");
  delbtnElement.textContent = "删除";

  listselectElement.appendChild(checkboxElement);

  functionElement.appendChild(editbtnElement);
  functionElement.appendChild(copybtnElement);
  functionElement.appendChild(delbtnElement);

  appendElement.appendChild(listselectElement);
  appendElement.appendChild(titleElement);
  appendElement.appendChild(createdateElement);
  appendElement.appendChild(editdateElement);
  appendElement.appendChild(functionElement);

  return appendElement;
}

const notedataXHR = new XMLHttpRequest();
notedataXHR.open("GET", `${config.apiURL}` + "notedata");
notedataXHR.addEventListener("loadend", () => {
  // 1. 获取现有笔记列表
  let notedata = JSON.parse(notedataXHR.response);
  // 2. 渲染笔记列表
  // 在nav后面追加
  const insertplace = document.querySelector(".main-content");
  notedata.title.forEach((title, index) => {
    insertplace.appendChild(renderElements(index, title));
  });
});

notedataXHR.send();

// 3. 响应用户操作
