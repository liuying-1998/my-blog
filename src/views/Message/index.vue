<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea
      title="留言板"
      :subTitle="`(${data.total})`"
      :isListLoading="isLoading"
      :list="data.rows"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import * as msgApi from "@/api/message";
import mainScroll from "@/mixins/mainScroll";
export default {
  components: {
    MessageArea,
  },
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll("messageContainer")],
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
      return await msgApi.getMessages(this.page, this.limit);
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
    // 下拉刷新
    handleScroll(dom) {
      if (this.isLoading || !dom) {
        // 正在加载更多
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
    async handleSubmit(data, callback) {
      const res = await msgApi.postMessage(data);
      this.data.rows.unshift(res);
      this.data.total++;
      callback("评论成功");
    },
  },
};
</script>

<style lang="less" scoped>
.message-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  padding: 25px 0;
}
.message-area-container {
  width: 700px;
  margin: 0 auto;
}
</style>
