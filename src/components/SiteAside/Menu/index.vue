<template>
  <div class="menu-container">
    <RouterLink
      v-for="(item, i) in menus"
      :key="i"
      :to="{ name: item.name }"
      :exact="item.exact"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
  </div>
</template>

<script>
import Icon from "../../Icon";
import "@/styles/global.less";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      menus: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          // startWiths: true,
          exact: false,
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
  methods: {
    // isSel(item) {
    //   const link = item.link.toLowerCase();
    //   const curLink = location.pathname.toLowerCase();
    //   // if (item.startWiths) {
    //   //   return curLink.startsWith(link);
    //   // } else {
    //   //   return curLink === link;
    //   // }
    //   return curLink.startsWith(link);
    // },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 45px;
    padding: 0 50px;
    &:hover {
      color: #fff;
    }
    &.selected {
      background: #636262;
      color: #fff;
    }
    .icon {
      width: 24px;
    }
  }
}
</style>