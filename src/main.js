/* IMPORTS
   ============================= */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import inViewportDirective from "vue-in-viewport-directive";
import axios from "axios";
import browserDetect from "vue-browser-detect-plugin";


/* PLUGINS AND TOOLS
   ============================= */

/* == Vue Scroll == */
const VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);

/* == Vue Browser Detect == */
Vue.use(browserDetect);

/* == Vue Validate == */
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

/* == Vue ViewPort == */
Vue.directive("in-viewport", inViewportDirective);
inViewportDirective.defaults.margin = "-40% 0%";

/* == Axios == */
axios.defaults.baseURL = "http://localhost:3000";

/* == Event Bus == */
export const eventBus = new Vue();


/* VUE INSTANCE
   ============================= */

/* == Config == */
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
