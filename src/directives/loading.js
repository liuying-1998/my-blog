import loadingUrl from '../assets/loading.svg';
import styles from "./loading.module.less";

// 判断el中是否存在loading效果的img元素
function getLoadingImage(el) {
  return el.querySelector("img[data-role=loading]");
}

function createLoadingImg() {
  const img = document.createElement('img');
  img.dataset.role = 'loading'
  img.src = loadingUrl;
  img.className = styles.loading;
  return img
}
// 导出指令
export default function (el, binding) {
  // 当binding.value有值，就删除img元素，没有就添加img元素
  const curImg = getLoadingImage(el);
  if (binding.value) {
    // 有loading的元素
    if (!curImg) {
      // 没有加载图片元素
      const img = createLoadingImg();
      el.appendChild(img);
    }
  } else {
    if (curImg) {
      curImg.remove();
    }
  }
}