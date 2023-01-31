<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "../SiteAside/index.vue";
export default {
  components: {
    SiteAside,
  },
  data() {
    return {
      url: "../../assets/weixin.jpg",
    };
  },
};
</script>

<style lang="less" scoped>
.test-container {
  background: #000;
  width: 250px;
  height: 600px;
  margin: 0 auto;
}
</style>