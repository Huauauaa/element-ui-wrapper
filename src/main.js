import App from "./App.vue";
// import HUI from "./components";
import HUI from "../dist/hui.umd.min.js";
import Vue from "vue";

Vue.use(HUI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
