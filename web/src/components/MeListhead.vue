<template>
  <div class="me-listhead">
    <div class="note-list-head" id="list-select-all">
      <input type="checkbox" id="list-select-btn-all" />
    </div>
    <div class="note-list-head" id="list-note-title-all">笔记标题</div>
    <div class="note-list-head" id="list-create-date-all">创建日期</div>
    <div class="note-list-head" id="list-last-edited-all">最后修改</div>
    <div class="note-list-head" id="list-function-btn-all">操作按钮</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.me-listhead {
  width: 1165px;
  height: 40px;
  background-color: orange;
}

.note-list-head {
  margin-top: 10px;
  margin-bottom: 10px;
  display: inline-block;
  background-color: #fff;
  text-align: center;
}

#list-select-all {
  display: flex;
  float: left;
  width: 20px;
  margin: 10px;
}

#list-select-btn-all {
  width: 20px;
  height: 20px;
}

#list-note-title-all {
  width: 500px;
  border-radius: 25px 0;
}

#list-create-date-all,
#list-last-edited-all,
#list-function-btn-all {
  width: 200px;
  border-radius: 25px 0;
}
</style>
