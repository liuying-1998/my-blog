<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mouseover="handleMousemove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" ref="image" :style="imagePosition">
      <ImageLoader
        @load="this.showWords"
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
      />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0, //标题宽度
      descWidth: 0, //描述宽度
      containerSize: null, //
      imgSize: null,
      mouseX: 0, //鼠标坐标
      mouseY: 0,
    };
  },
  computed: {
    // 计算图片坐标
    imagePosition() {
      if (!this.imgSize || !this.containerSize) {
        return;
      }
      const extraWidth = this.imgSize.width - this.containerSize.width; //图片宽度-容器宽度是鼠标最远的left
      const extraHeight = this.imgSize.height - this.containerSize.height;

      const left = -(extraWidth / this.containerSize.width) * this.mouseX;
      const top = -(extraHeight / this.containerSize.height) * this.mouseY;
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
    // 默认在鼠标在中间
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth; //标题宽度
    this.descWidth = this.$refs.desc.clientWidth; //描述宽度
    // console.log(this.titleWidth, this.descWidth);
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  methods: {
    showWords() {
      // 标题依次展示
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      // 重新获取宽度，强制让浏览器重新渲染
      this.$refs.title.clientWidth; //reflow
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      // 间隔1s后展示描述文字
      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      // 重新获取宽度，强制让浏览器重新渲染
      this.$refs.desc.clientWidth; //reflow
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    // 设置图片位置
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.imgSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
    },
    // 鼠标移动事件，计算鼠标位置
    handleMousemove(e) {
      const rect = this.$refs.container.getBoundingClientRect(); //获取容器四边
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
.carousel-item-container {
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
}
.carousel-img {
  width: 110%;
  height: 110%;
  position: absolute;
  left: 0;
  top: 0;
  transition: 0.3s;
}
.title,
.desc {
  position: absolute;
  left: 30px;
  letter-spacing: 3px;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  opacity: 0;
  white-space: nowrap;
}
.title {
  top: calc(50% - 40px);
  font-size: 2em;
}
.desc {
  top: calc(50% + 20px);
}
</style>