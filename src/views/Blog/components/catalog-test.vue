<template>
  <Catalog :list="list" @select="handleSel" />
</template>

<script>
import Catalog from "./Catalog";
export default {
  components: { Catalog },
  data() {
    return {
      list: [
        {
          name: "你都是你",
          isSelct: false,
          children: [
            { name: "你都是你1", isSelct: false },
            { name: "你都是你1", isSelct: false },
            { name: "你都是你1", isSelct: true },
            { name: "你都是你1", isSelct: false },
          ],
        },
        { name: "你都是你", isSelct: false },
        { name: "你都是你", isSelct: false },
        { name: "你都是你", isSelct: true },
        { name: "你都是你", isSelct: false },
      ],
    };
  },
  methods: {
    handleSel(item) {
      console.log(item);
    },
  },
};
</script>

<style>
</style>