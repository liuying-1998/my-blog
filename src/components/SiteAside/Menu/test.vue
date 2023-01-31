<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "@/components/Menu/index.vue";
export default {
  components: {
    Menu,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  background: #000;
  width: 400px;
  height: 600px;
  margin: 0 auto;
}
</style>