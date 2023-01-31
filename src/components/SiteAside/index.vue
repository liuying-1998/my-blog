<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar :url="data.avatar" :size="150" />
      <div class="title">{{ data.siteTitle }}</div>
    </template>

    <Menu />
    <Contact />
    <p v-if="data" class="footer">{{ data.icp }}</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar/Avatar.vue";
import Menu from "./Menu/index.vue";
import Contact from "./Contact/index.vue";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
.site-aside-container {
  background: @dark;
  width: 100%;
  height: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-y: auto;
}
&::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.avatar-container {
  margin: 0 auto;
}
.title {
  text-align: center;
  color: #fff;
  font-size: 1.2em;
  padding-top: 8px;
}
.footer {
  text-align: center;
  font-size: 12px;
}
</style>