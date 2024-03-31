// database.js 数据库相关操作

const config = require("./config.js");
const mysql = require("mysql");

// 修改返回时间格式 为 YYYY-MM-DD hh:mm:ss
function timeFormat(rawdate) {
  const rawstr = rawdate.toISOString();
  return rawstr.replace("T", " ").substring(0, 19);
}

// 初始化 MySql 数据库
const db = mysql.createConnection({
  host: config.MYSQL_HOST,
  user: config.MYSQL_USERNAME,
  password: config.MYSQL_PASSWORD,
  database: config.MYSQL_DATABASE,
});

// 心跳检查函数
function heartBeat() {
  db.query("SELECT 1", (err, results) => {
    if (err) {
      console.error("数据库心跳检查失败:", err);
      return;
    }
    console.log("数据库心跳检查成功:", results);
  });
}

// 建表初始化
function initDatabase() {
  // 建表SQL语句
  const createTableSql = `
CREATE TABLE IF NOT EXISTS ${config.MYSQL_TABLE} (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    create_date DATETIME NOT NULL DEFAULT NOW(),
    lastedit_date DATETIME NOT NULL DEFAULT NOW(),
    content TEXT NOT NULL
);`;
  // 建表操作
  db.query(createTableSql, (err) => {
    if (err) throw err;
    console.log(`表 '${config.MYSQL_TABLE}' 初始化成功`);
  });
}

// 查询所有 笔记列表
const notedataSqlStr = `SELECT * FROM ${config.MYSQL_TABLE}`;
function noteData() {
  return new Promise((resolve, reject) => {
    db.query(notedataSqlStr, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      result.forEach((element) => {
        // 修改时间显示格式
        element.create_date = timeFormat(element.create_date);
        element.lastedit_date = timeFormat(element.lastedit_date);
      });
      resolve(result); // 返回的查询结果
    });
  });
}

module.exports = { heartBeat, initDatabase, noteData };
