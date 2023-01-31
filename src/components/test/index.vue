<template>
  <button @click="handleClick">{{ content }}</button>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 10,
    },
    content: {
      type: String,
      default: "click",
    },
  },
  data() {
    return {
      clickNumber: 0, //点击次数
      changeNumber: 0, //触发次数
    };
  },
  methods: {
    handleClick() {
      this.clickNumber++;
      // console.log(this.clickNumber);
      if (this.clickNumber % this.count === 0) {
        this.changeNumber++;
        this.$emit("nclick", this.changeNumber);
      }
    },
  },
};
</script>

<style>
</style>