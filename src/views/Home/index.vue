<template>
  <div
    class="home-container"
    ref="container"
    @wheel="wheel"
    v-loading="loading"
  >
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transitionend="wheelEnd"
    >
      <li v-for="item in data" :key="item.id">
        <Carouselitem :carousel="item" />
      </li>
    </ul>
    <div
      v-show="index >= 1"
      @click="switchTo(index - 1)"
      class="arrow arrow-up"
    >
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
      class="arrow arrow-down"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        :class="{ active: i === index }"
        v-for="(item, i) in data"
        :key="item.id"
        @click="switchTo(i)"
      ></li>
    </ul>
    <!-- <Loading v-if="isLoading" /> -->
  </div>
</template>

<script>
// import { getBanners } from "@/api/banner";
import { mapState } from "vuex";
import Carouselitem from "./Carouselitem";
import Icon from "@/components/Icon";
// import fetchData from "@/mixins/fetchData";
export default {
  // mixins: [fetchData([])],
  components: {
    Carouselitem,
    Icon,
    // Loading,
  },
  data() {
    return {
      index: 0, //当前banner的索引
      containerHeight: 0, //容器的高度
      isSwitch: false, //是否正在翻页
    };
  },
  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner", ["loading", "data"]),
  },
  methods: {
    // async fetchData() {
    //   return await getBanners();
    // },
    switchTo(i) {
      this.index = i;
    },
    wheel(e) {
      if (this.isSwitch) {
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        this.isSwitch = true; //准确滚动时才设置为true
        // 向上滚动，向上翻页
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        this.isSwitch = true;
        // 当前banner小于最后的banner位置，可以向下滚动
        this.index++;
      }
      // console.log(e.deltaY, this.index);
    },
    wheelEnd() {
      this.isSwitch = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixture.less";
@import "~@/styles/color.less";

.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;
  li {
    width: 100%;
    height: 100%;
  }
}
.arrow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  color: @gray;
  cursor: pointer;
  font-size: 30px;
  &.arrow-up {
    top: 25px;
    animation: jump-up 2s infinite;
  }
  &.arrow-down {
    bottom: 25px;
    top: auto;
    animation: jump-down 2s infinite;
  }
  @keyframes jump-up {
    0% {
      transform: translate(-50%, 5px);
    }
    50% {
      transform: translate(-50%, -5px);
    }
    100% {
      transform: translate(-50%, 5px);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -5px);
    }
    50% {
      transform: translate(-50%, 5px);
    }
    100% {
      transform: translate(-50%, -5px);
    }
  }
}
.indicator {
  .self-center();
  transform: translateY(-50%);
  right: 20px;
  left: auto;
  li {
    background: @words;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    &.active {
      background: #fff;
    }
  }
}
</style>
