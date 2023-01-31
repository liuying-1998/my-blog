<template>
  <div class="empty-contanier">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
@import "~@/styles/mixture.less";
.empty-contanier {
  color: @gray;
  text-align: center;
  .self-center();
}
.icon-container {
  font-size: 72px;
}
</style>
