import Vue from 'vue';

Vue.directive('rotate', {
  inserted (el, binding, vnode) {
    let obj = Object.assign({}, {text: '建设中', opacity: '.65'}, binding.value);
    
    if (obj.text) {
      const style = Object.assign({}, {height: '.2', fontSize: '0.14', width: '.8'}, obj.style);
      
      el.setAttribute('class', `rotate-container ${el.getAttribute('class') || ''}`);
      el.style.opacity = obj.opacity;
      let rotate = document.createElement('span');
      rotate.innerText = obj.text;
      rotate.setAttribute('class', 'rotate');
      
      /**
       * 已知 矩形 h:高度, w:宽度
       * 围绕矩形底边中心 顺时针旋转45度
       * 求 矩形 的 距离顶部位置x 距离右侧位置y
       * 解：
       * (x + h)  * Math.sqrt(2) = w / 2
       * x + h = y + w / 2
       * =>
       * x = w / 2 / Math.sqrt(2) - h
       * y = x + h - w / 2
       */
      let remSizePx = window.getComputedStyle(document.documentElement)['fontSize'];
      let remSize = Number(remSizePx.substr(0, remSizePx.length - 2));
      let size = {};
      size.width = parseFloat(style.width) * remSize;
      size.height = parseFloat(style.height) * remSize;
      size.top = size.width / 2 / Math.sqrt(2) - size.height;
      size.right = size.top + size.height - size.width / 2;
      style.top = `${Math.floor(size.top)}px`;
      style.right = `${Math.floor(size.right)}px`;
      // 解决 android uc浏览器 line-height 无效 问题
      let IsWindowsPhone = navigator.userAgent.indexOf('Windows Phone') >= 0;
      let IsAndroid = navigator.userAgent.indexOf('Android') > 0 && !IsWindowsPhone;
      if (IsAndroid) {
        style.paddingTop = style.paddingBottom = style.fontSize / 6;
      }
      for (let key in style) {
        rotate.style[key] = ['fontSize', 'width', 'height', 'paddingTop'].indexOf(key) !== -1 ? `${style[key]}rem` : style[key];
      }
      rotate.style.lineHeight = rotate.style.height;
      
      el.appendChild(rotate);
    }
  }
});
