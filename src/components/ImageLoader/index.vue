<template>
  <div class="image-loader-container">
    <!-- 占位图 -->
    <img v-if="!imgloaded" class="placeholder-img" :src="placeholder" alt="" />
    <!-- 原图 -->
    <img
      @load="handleLoad"
      :src="src"
      alt=""
      :style="{ opacity: opacity, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originLoaded: false, //原图是否加载完成
      imgloaded: false,
    };
  },
  computed: {
    opacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      this.originLoaded = true;
      setTimeout(() => {
        this.imgloaded = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixture.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
  .placeholder-img {
    filter: blur(20px);
  }
}
</style>