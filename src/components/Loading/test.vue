<template>
  <div style="position: relative">
    <Loading v-if="isLoading" />
    <button @click="isLoading = !isLoading">显示</button>
  </div>
</template>

<script>
import Loading from "./index.vue";
export default {
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: true,
    };
  },
};
</script>

<style>
</style>