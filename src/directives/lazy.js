import defaultGif from '@/assets/default.gif';
import eventBus from '@/eventBus';
import { debounce } from "@/utils";

let imgs = []; //需要加载的图片数组

// 处理单张图片
function setImage(img) {
  // 首先默认使用同一张图片
  img.dom.src = defaultGif; //使用默认图片
  // 判断图片是否在视口范围内
  const clientHeight = document.documentElement.clientHeight;
  const rect = img.dom.getBoundingClientRect();
  const rectHeight = rect.height || 150;
  if (rect.top >= -rectHeight && rect.top <= clientHeight) {
    // 在视口范围内
    const tempImg = new Image();
    tempImg.onload = function() {
      // 当真实图片加载完成之后
      img.dom.src = img.src;
    };
    tempImg.src = img.src;

    // 方法二：不用等待加载完成
    // img.dom.src = img.src;
    imgs = imgs.filter(item => item !== img); //筛选掉已经加载过的图片
  }
}

// 循环所有图片
function setImages() {
  for (const img of imgs) {
    setImage(img)
  }
}
function handleScroll() {
  setImages()
}

// setInterval(() => {
//   console.log(imgs)
// }, 1000);

eventBus.$on("mainScroll", debounce(handleScroll))

export default {
  // 加入要加载的图片
  inserted(el, bindings) {
    const img = {
      dom: el,
      src: bindings.value,
    }
    imgs.push(img)
    setImage(img)
  },
  // 分页时删除之前图片
  unbind(el) {
    imgs = imgs.filter(img => img.dom !== el)
  }
}