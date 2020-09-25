import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

const VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);

axios.defaults.baseURL = "http://localhost:3000";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
