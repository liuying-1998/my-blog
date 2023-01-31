<template>
  <div @click="handleClick" class="to-top-container" v-show="isShow">Top</div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.isShow = false;
        return;
      }
      if (dom.scrollTop >= 500) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    // 点击回到顶部
    handleClick() {
      this.$bus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
.to-top-container {
  background: @primary;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  position: absolute;
  z-index: 99;
  right: 50px;
  bottom: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
</style>