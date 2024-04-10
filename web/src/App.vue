<template>
  <div id="app">
    <!-- 导航栏部分 -->
    <MeNavtool></MeNavtool>
    <!-- 笔记部分 -->
    <MeMaincontent :list="notelist"></MeMaincontent>
  </div>
</template>

<script>
import MeNavtool from "./components/MeNavtool.vue";
import MeMaincontent from "./components/MeMaincontent.vue";
import { GetListall } from "./js/GetListall.js";

export default {
  components: {
    MeNavtool,
    MeMaincontent,
  },
  data() {
    return {
      notelist: [],
    };
  },
  created() {
    (async () => {
      this.notelist = (await GetListall()) || [];
    })();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

#app {
  width: 1200px;
  height: 800px;
  margin: 0 auto;
}
</style>
