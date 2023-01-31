<template>
  <div>
    <Pager :total="total" :current="current" @pageChange="changePage" />
  </div>
</template>

<script>
import Pager from "./index.vue";

export default {
  name: "App", //组件没有在注册时指定名字，则使用该命名
  components: {
    // Avatar,
    // Icon,
    Pager,
  },
  data() {
    return {
      current: 1,
      total: 300,
    };
  },
  methods: {
    changePage(newPage) {
      console.log(newPage, 1213);
      this.current = newPage;
    },
  },
};
</script>

<style scoped>
</style>
