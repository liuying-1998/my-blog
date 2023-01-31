<template>
  <ul class="contact-container" v-if="data">
    <li>
      <a :href="data.github" target="_blank">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>{{ data.githubName }}</span>
      </a>
    </li>
    <li>
      <a :href="`mailto:${data.mail}`">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>{{ data.mail }}</span>
      </a>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>{{ data.qq }}</span>
      </a>
      <div class="pop">
        <img src="@/assets/qq.jpg" alt="" />
      </div>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="weixin" />
        </div>
        <span>{{ data.weixin }}</span>
      </a>
      <div class="pop">
        <img src="@/assets/weixin.jpg" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "../../Icon/index.vue";
import { mapState } from "vuex";

export default {
  components: {
    Icon,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
.contact-container {
  // margin: 0;
  background: transparent;
  color: @gray;
  list-style: none;
  padding: 20px;
  li {
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
  }
}
.icon {
  font-size: 26px;
  width: 36px;
}
.pop {
  position: absolute;
  width: 200px;
  height: 200px;
  background: white;
  transform: scaleY(0);
  transition: 0.3s;
  left: 0;
  bottom: 40px;
  transform-origin: center bottom;
  border: 1px solid;
  border-radius: 8px;
  &::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background: #fff;
    left: 50%;
    bottom: -4px;
    transform: translateX(-50%) rotate(45deg);
  }
  img {
    width: 150px;
    height: 150px;
    transform: translate(25px, 25px);
  }
}
</style>