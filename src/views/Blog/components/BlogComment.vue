<template>
  <div class="blog-commot-container">
    <MessageArea
      title="评论列表"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getComments, comment } from "@/api/blog.js";

export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  computed: {
    moreComment() {
      return this.data.rows.length < this.data.total;
    },
  },
  methods: {
    async fetchData() {
      return await getComments(this.page, this.limit, this.$route.params.id);
    },
    // 加载下一页
    async fetchMore() {
      if (!this.moreComment) {
        // 没有更多数据
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    async handleSubmit(formData, callback) {
      console.log(formData);
      const res = await comment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(res);
      this.data.total++;
      callback("评论成功");
    },
    async handleScroll(dom) {
      if (this.isLoading || !dom) {
        return;
      }
      const range = 100; //到达底部的范围
      const differ = Math.abs(
        dom.scrollTop + dom.clientHeight - dom.scrollHeight
      );
      if (differ <= range) {
        console.log("底部");
        this.fetchMore();
      }
    },
  },
};
</script>

<style>
</style>