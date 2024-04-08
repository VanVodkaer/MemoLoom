<template>
  <div class="me-navtool">
    <button class="nav-btn" id="create-new">新建笔记</button>
    <button class="nav-btn" id="copy-selected">复制</button>
    <button class="nav-btn" id="dele-selected">删除</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.me-navtool {
  width: 1200px;
  height: 60px;
  background-color: orange;
  border-radius: 25px 0;
}

.me-navtool .nav-btn {
  height: 40px;
  margin-top: 10px;
  border: none;
  background-color: #fff;
  border-radius: 25px 0;
  font-size: large;
}

.me-navtool .nav-btn:hover {
  box-shadow: 2px 2px 5px #888;
}

#create-new {
  width: 120px;
  margin-left: 30px;

  float: left;
}

#dele-selected,
#copy-selected {
  width: 120px;
  float: right;
  margin-right: 30px;
}
</style>
