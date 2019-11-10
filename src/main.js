import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";

import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";

import { faEdit } from "@fortawesome/free-solid-svg-icons";

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

library.add(faEdit);

Vue.use(VueMaterial);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
