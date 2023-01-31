<template>
  <div
    class="switch-container"
    @click="handleClick"
    :class="{ checked: checked }"
  ></div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checked: this.value,
    };
  },
  methods: {
    handleClick() {
      this.checked = !this.checked;
      this.$emit("input", this.checked);
      console.log(this.checked, 1111);
    },
  },
};
</script>

<style scoped lang="less">
.switch-container {
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background: rgb(202, 53, 53);
  position: relative;
  &::before {
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    transition: 0.3s;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
.checked {
  background: rgb(167, 235, 99);
  &::before {
    transform: translate(20px, -50%);
  }
}
</style>