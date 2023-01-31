<template>
  <div class="blog-TOC-container">
    <h3>文章分类</h3>
    <Catalog :list="toWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import Catalog from "./Catalog";
import { debounce } from "@/utils";
export default {
  components: {
    Catalog,
  },
  props: {
    toc: {
      type: Array,
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  computed: {
    //根据toc属性及activeAnchor得到带有isSelect属性的toc数组
    toWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getTOC(t.children),
        }));
      };
      return getTOC(this.toc);
    },
    // 根据toc得到对应元素数组
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor)); //拿到文章内标题的dom元素
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  created() {
    this.setSlectDelay = debounce(this.setSelect, 80);
    this.$bus.$on("mainScroll", this.setSlectDelay);
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    // 设置activeAnchor的值
    setSelect(dom) {
      if (!dom) {
        return;
      }
      this.activeAnchor = ""; //清空之前状态
      const range = 200;
      for (const dom of this.doms) {
        if (!dom) {
          // dom元素不存在
          continue;
        }
        const top = dom.getBoundingClientRect().top; //元素离视口顶部的距离
        if (top >= 0 && top <= range) {
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          return;
        } else {
          // 在规定的范围上方
          this.activeAnchor = dom.id;
        }
      }
    },
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSlectDelay);
  },
};
</script>

<style lang="less" scoped>
.blog-TOC-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
}
</style>