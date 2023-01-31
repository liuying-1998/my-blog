<template>
  <div class="test-container">
    <Empty />
  </div>
</template>

<script>
import Empty from "./index.vue";
export default {
  components: {
    Empty,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  position: relative;
  // width: 100%;
  // height: 100%;
  width: 500px;
  height: 400px;
  margin: 0 auto;
}
</style>