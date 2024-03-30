// database.js 数据库相关操作

const config = require("./config.js");
const mysql = require("mysql");

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
    create_date DATETIME NOT NULL,
    lastedit_date DATETIME NOT NULL,
    content TEXT NOT NULL
)`;
  // 建表操作
  db.query(createTableSql, (err) => {
    if (err) throw err;
    console.log(`表 '${config.MYSQL_TABLE}' 初始化成功`);
  });
}

// 查询所有
const notedataSqlStr = `SELECT * FROM ${config.MYSQL_TABLE}`;
function noteData() {
  db.query(notedataSqlStr, (err, result) => {
    if (err) {
      console.log(err.message);
    }
    return result;
  });
}

module.exports = { heartBeat, initDatabase, noteData };
