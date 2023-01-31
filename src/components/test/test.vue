<template>
  <Test @nclick="nclick" :content="content" />
</template>

<script>
import Test from "./index.vue";
export default {
  components: {
    Test,
  },
  data() {
    return {
      content: "click",
    };
  },
  methods: {
    nclick(e) {
      this.content = `触发了${e}次`;
    },
  },
};
</script>

<style>
</style>