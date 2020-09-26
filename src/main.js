import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import inViewportDirective from 'vue-in-viewport-directive'
inViewportDirective.defaults.margin = '-40% 0%'

// Vue Scroll
const VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);

// VueValidate
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

//Vue Viewport
Vue.directive('in-viewport', inViewportDirective)

// Axios
axios.defaults.baseURL = "http://localhost:3000";

// Event Bus
export const eventBus = new Vue();



Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
