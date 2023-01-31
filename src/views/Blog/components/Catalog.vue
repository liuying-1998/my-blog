<template>
  <ul class="Catalog-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ active: item.isSelect }">{{
        item.name
      }}</span>
      <span
        v-if="item.aside"
        @click="handleClick(item)"
        class="aisde"
        :class="{ active: item.isSelect }"
        >{{ item.aside }}</span
      >
      <!-- 组件递归 -->
      <Catalog :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "Catalog",
  props: {
    list: {
      type: Array,
      default: () => [], //默认为空数组
    },
  },
  methods: {
    handleClick(item) {
      this.$emit("select", item);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
.Catalog-container {
  list-style: none;
  padding: 0;
  .Catalog-container {
    margin-left: 1em;
  }
  li {
    cursor: pointer;
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}
.aisde {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
}
</style>