<template>
  <img
    class="avatar-container"
    :src="url"
    alt=""
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true, // 此属性必填
    },
    size: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>

