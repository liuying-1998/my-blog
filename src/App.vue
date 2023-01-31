<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <RouterView />
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "./components/Layout/index.vue";
import SiteAside from "./components/SiteAside/index.vue";
import ToTop from "./components/ToTop/index.vue";

export default {
  name: "App", //组件没有在注册时指定名字，则使用该命名
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
  data() {
    return {
      // current: 1,
      // total: 300,
    };
  },
  methods: {
    // changePage(newPage) {
    //   console.log(newPage, 1213);
    //   this.current = newPage;
    // },
  },
};
</script>

<style scoped lang="less">
@import "./styles/mixture.less";
.app-container {
  .self-fill(fixed);
}
.aside {
  width: 250px;
  height: 100%;
}
</style>
