# 服务端文档

## 服务端配置

##### `config.js` 配置项

- `SERVER_PORT` 服务端运行的端口
- `MYSQL_HOST` MySql 数据库连接地址
- `MYSQL_USERNAME` MySql 数据库登陆用户名
- `MYSQL_PASSWORD` MySql 数据库登陆密码
- `MYSQL_DATABASE` MySql 数据库名称
- `MYSQL_TABLE` MySql 数据库表名称

## 服务端接口

- `/api/notedata` 返回所有笔记列表
  - 返回格式 `JSON`
  - 返回对象数组，其中每个对象的内容如下
    - `id`笔记 id
    - `title`笔记标题
    - `create_date`创建时间 格式 YYYY-MM-DD hh:mm:ss
    - `lastedit_date`创建时间 格式 YYYY-MM-DD hh:mm:ss
  - 发生错误时返回`Server error`, 状态码`500`
