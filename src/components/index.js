// 引入组件

import HImg from "./HImg";

// 存放组件的数组
const components = [HImg];

// 定义 install 方法，接收 Vue 作为参数。
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 遍历 components 数组，来进行全局注册
  components.map((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  HImg,
};
