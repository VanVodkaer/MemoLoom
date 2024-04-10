<template>
  <div class="me-listitem">
    <div class="note-list-body list-select">
      <input type="checkbox" class="list-select-btn" id="ch1" />
    </div>
    <div class="note-list-body list-note-title" id="ti1">
      {{ item.title }}
    </div>
    <div class="note-list-body list-create-date">
      {{ item.create_date }}
    </div>
    <div class="note-list-body list-last-edited">
      {{ item.lastedit_date }}
    </div>
    <div class="note-list-body list-function-btn">
      <button>编辑</button>
      <button>复制</button>
      <button>删除</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style>
.me-listitem {
  margin-top: 5px;
  width: 1165px;
  height: 60px;
  background-color: #eee;
}

.note-list-body {
  float: left;
  margin-top: 17px;
}

.list-select-btn {
  width: 20px;
  height: 20px;
  margin: 0 10px;
}

.list-note-title {
  width: 480px;
  /* 强制一行内显示文本 */
  white-space: nowrap;
  /* 溢出的部分隐藏起来 */
  overflow: hidden;
  /* 文字用省略号代替超出部分 */
  text-overflow: ellipsis;
  margin-left: 10px;
  margin-right: 10px;
}

.list-create-date,
.list-last-edited,
.list-function-btn {
  width: 200px;
  text-align: center;
}
</style>
