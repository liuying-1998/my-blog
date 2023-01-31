<template>
  <div class="project-container" ref="projectContainer" v-loading="loading">
    <div class="project-content" v-for="item in data" :key="item.id">
      <a
        :href="
          item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
        "
        :target="item.url ? '_blank' : '_self'"
      >
        <img class="imgs" v-lazy="item.thumb" />
      </a>
      <div class="info">
        <h2>{{ item.name }}</h2>
        <a :href="item.github" target="_black" v-if="item.github">
          项目链接地址
        </a>
        <p class="describe" v-for="(desc, i) in item.description" :key="i">
          {{ desc }}
        </p>
      </div>
    </div>
    <Empty v-if="data.length === 0 && !loading" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import mainScroll from "@/mixins/mainScroll.js";
import Empty from "@/components/Empty";
export default {
  components: {
    Empty,
  },
  mixins: [mainScroll("projectContainer")],
  created() {
    this.$store.dispatch("project/fetchProject");
  },
  computed: mapState("project", ["loading", "data"]),
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
.project-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.project-content {
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  transition: 0.5s;
  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
  }
  .imgs {
    width: 250px;
    height: 200px;
    margin-right: 15px;
    object-fit: cover;
    border-radius: 15px;
  }
  .info {
    line-height: 1.7;
    flex: 1 1 auto;
    h2 {
      margin: 0;
      cursor: pointer;
      &:hover {
        color: @primary;
      }
    }
    a {
      font-size: 14px;
      color: @primary;
    }
  }
}
</style>
