<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span>日期：{{ formatDate(blog.createDate) }}</span>
      <span>浏览：{{ blog.scanNumber }}</span>
      <a href="#data-form-container">评论: {{ blog.commentNumber }}</a>
      <RouterLink
        :to="{
          name: 'CategoryBlog',
          params: {
            categoryId: blog.category.id,
          },
        }"
        >{{ blog.category.name }}</RouterLink
      >
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import { formatDate } from "@/utils";
import "@/styles/markdown.css"; //文章markdown样式
import "highlight.js/styles/github.css"; //代码着色
export default {
  props: {
    blog: {
      type: Object,
      require: true,
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
.blog-detail-container {
  margin: 2em 0;
}
.aside {
  font-size: 12px;
  color: @gray;
  span,
  a {
    margin-right: 15px;
  }
}
</style>