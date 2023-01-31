<template>
  <div>
    <Avatar :url="1" />
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";

export default {
  name: "App", //组件没有在注册时指定名字，则使用该命名
  components: {
    Avatar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>
