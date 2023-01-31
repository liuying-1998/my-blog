<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./index.vue";

export default {
  components: {
    Contact,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixture.less";
.test-container {
  width: 350px;
  height: 600px;
  margin: 0 auto;
  padding-top: 200px;
  background: black;
}
</style>