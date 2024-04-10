<template>
  <div class="me-maincontent">
    <!-- 笔记导航条 -->
    <MeListhead></MeListhead>
    <!-- 单条笔记渲染-->
    <MeListitem v-for="item in list" :key="item.id" :item="item"></MeListitem>
  </div>
</template>

<script>
import MeListhead from "./MeListhead.vue";
import MeListitem from "./MeListitem.vue";
export default {
  components: { MeListhead, MeListitem },
  props: {
    list: Array,
  },
};
</script>

<style>
.me-maincontent {
  border-left: 2px solid orange;
  width: 1200px;
  padding: 10px 10px 0;
}
</style>
