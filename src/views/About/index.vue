<template>
  <div class="about-container" v-loading="loading && !webLoaded">
    <!-- 嵌入网页 -->
    <iframe
      v-if="src"
      class="about-content"
      :src="src"
      frameborder="0"
      @load="webLoaded = true"
    >
    </iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      webLoaded: false, //网站是否加载完成
    };
  },
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
  computed: mapState("about", {
    src: "data",
    loading: "loading",
  }),
};
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.about-content {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: block;
}
</style>
