<template>
  <Layout>
    <div ref="mainContainer" class="main" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import BlogComment from "./components/BlogComment.vue";
import mainScroll from "@/mixins/mainScroll";
import { titleController } from "@/utils";

export default {
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  mixins: [fetchData(null), mainScroll("mainContainer")],
  methods: {
    async fetchData() {
      let resp = await getBlog(this.$route.params.id);
      // resp = null;
      if (!resp) {
        // 文章不存在
        this.$router.push("/404");
        return;
      }
      titleController.setRouterTitle(resp.title);
      return resp;
    },
  },
  updated() {
    const hash = location.hash;
    location.hash = ""; //页面更新时，清空hash值
    setTimeout(() => {
      location.hash = hash; //把hash值改成之前的
    }, 50);
  },
};
</script>

<style lang="less" scoped>
.main {
  position: relative;
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  padding: 20px;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>