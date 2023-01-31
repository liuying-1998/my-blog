<template>
  <Toggle :value="value" @input="handleSwitch" />
</template>

<script>
import Toggle from "./index.vue";
export default {
  components: {
    Toggle,
  },
  data() {
    return {
      value: false,
    };
  },
  methods: {
    handleSwitch(e) {
      this.value = e;
      console.log(this.value);
    },
  },
};
</script>

<style>
</style>