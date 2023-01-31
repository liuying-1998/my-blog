<template>
  <div class="blog-catagory-container">
    <h3>文章分类</h3>
    <Catalog :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import Catalog from "./Catalog";
import fetchData from "@/mixins/fetchData";
import { getBlogTypes } from "@/api/blog";
export default {
  mixins: [fetchData([])],
  components: {
    Catalog,
  },
  computed: {
    // 获取分类ID
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    // 计算带有isSelect属性的数组
    list() {
      const totalArr = this.data.reduce((a, b) => a + b.articleCount, 0);
      const result = [
        { name: "全部", id: -1, articleCount: totalArr },
        ...this.data,
      ];
      return result.map((item) => ({
        ...item,
        isSelect: item.id === this.categoryId,
        aside: `${item.articleCount}篇`,
      }));
    },
  },
  methods: {
    async fetchData() {
      return await getBlogTypes();
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-catagory-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  height: 100%;
  position: relative;
  h3 {
    letter-spacing: 2px;
  }
}
</style>