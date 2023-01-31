<template>
  <div>
    <div v-for="(item, i) in types" :key="i">
      <Icon :type="item" />
      <label>{{ item }}</label>
    </div>
  </div>
</template>

<script>
import Icon, { types } from "./index.vue";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      types,
    };
  },
  methods: {},
};
</script>

<style scoped>
.iconfont {
  font-size: 30px;
  color: aqua;
}
</style>
